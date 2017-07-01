source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

group :jekyll_plugins do
  gem 'github-pages', versions['github-pages']
  gem 'jekyll-octicons'
  gem 'jekyll-livereload'
end

gem 'rb-fsevent', '0.9.8' # See issue https://github.com/guard/listen/issues/431
