require "bundler/setup"
require "safe_yaml"
require "minitest/autorun"
require "net/http"

describe "lint test" do
  BANNED_WORDS = Regexp.new('\b(' + [
    "GitHub App",     # They're all GitHub Apps
    "bot",            # TODO: link to docs about why bot is not preferred
    "automatically",  # They're all automatic
    "probot",         # Now you're just name dropping
  ].join('|') + ')\b', Regexp::IGNORECASE | Regexp::MULTILINE)

  Dir.glob("_apps/*.md").each do |path|
    describe path do
      # Load frontmatter
      data = SafeYAML.load_file(path)
      fields = SafeYAML.load_file("test/frontmatter.yml")

      it "does not have extraneous fields" do
        extra_fields = data.keys - fields.keys
        assert extra_fields.empty?, "Unexpected metadata: #{extra_fields.inspect}"
      end

      fields.each do |name, attrs|
        if attrs["required"]
          it "${name} is required" do
            assert data.key?(name), "#{name} is required"
          end
        end

        if attrs["type"] && data[name]
          it "${name} must be a #{attrs["type"]}" do
            assert_kind_of Kernel.const_get(attrs["type"]), data[name]
          end
        end
      end

      it "description should be sentence case" do
        first_letter = data["description"][0]
        assert_equal first_letter.upcase, first_letter, "Description should be in sentence case"
      end

      it "does not use banned words" do
        %w(title description slug).each do |field|
          match = data[field].match(BANNED_WORDS)
          if match
            assert !match, "`#{match[1]}` should not be used in #{field}"
          end
        end
      end

      it "host returns 200" do
        uri = URI(data["host"] + '/probot/stats')
        res = Net::HTTP.get_response(uri)
        assert_equal "200", res.code, "Expected 200 response from #{uri}"
      end
    end
  end
end
