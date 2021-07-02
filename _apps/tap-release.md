---
title: Tap Release
description: Update Homebrew taps when you publish new GitHub releases.
slug: tap-release
screenshots:
  - https://raw.githubusercontent.com/toolmantim/tap-release/master/design/screenshot.png
authors:
  - toolmantim
repository: toolmantim/tap-release
host: https://tap-release.now.sh
stars: 42
updated: 2021-06-17 09:10:02 UTC
installations: 29
organizations:
  - infection
  - humbug
  - phogolabs
  - tophat
  - AugurProject
  - njzjz
  - buildkite
  - kentaro-m
  - GetStream
  - dmirubtsov
---

## Usage

Firstly, you’ll need to install the [Tap Release GitHub App](https://github.com/apps/tap-release). This listens out for any releases, or any changes to the configuration.

Then, add a `.github/tap-release.yml` configuration file to the GitHub repository where you publish new releases to.

For example, given the following `.github/tap-release.yml` file in a `my-org/app` repository:

```yml
asset: app.zip
tap: my-org/homebrew-app/app.rb
template: >
  class App < Formula
    desc     "$REPO_DESCRIPTION"
    homepage "$REPO_WEBITE"
    version  "$STABLE_VERSION"
    url      "$STABLE_ASSET_URL"
    sha256   "$STABLE_ASSET_SHA256"

    def install
      prefix.install "app"
    end
  end
```

When a new release is published to `my-org/app` (e.g. `v4.2.0`), containing a `app.zip` asset, Tap Release would push a commit to the tap formula in the `my-org/homebrew-app` repository updating it to:

```rb
class App < Formula
  desc     "The best app ever."
  homepage "https://github.com/my-org/app"
  version  "v2.4.0"
  url      "https://github.com/my-org/app/releases/download/v4.2.0/app.zip"
  sha256   "f3832d8966dd39f7ae1316195ebb379cf18aece281bc2f7c43dd799130ebf460"

  def install
    prefix.install "app"
  end
end
```

If you don't use release assets, you can also just use a URL pattern. For example, given the following template for a [Node style tap](https://docs.brew.sh/Node-for-Formula-Authors):

```yml
url: "https://registry.npmjs.org/app/-/app-$VERSION_NUMBER.tgz"
tap: my-org/homebrew-app/app.rb
template: >
  class App < Formula
    desc     "$REPO_DESCRIPTION"
    homepage "$REPO_WEBITE"
    version  "$STABLE_VERSION"
    url      "$STABLE_ASSET_URL"
    sha256   "$STABLE_ASSET_SHA256"

    # ...
  end
```

When a new release is published (e.g. `v4.2.0`), Tap Release would push a commit to the tap formula in the `my-org/homebrew-app` repository updating it to:

```rb
class App < Formula
  desc     "The best app ever."
  homepage "https://github.com/my-org/app"
  version  "v4.2.0"
  url      "https://registry.npmjs.org/app/-/app-4.2.0.tgz"
  sha256   "f3832d8966dd39f7ae1316195ebb379cf18aece281bc2f7c43dd799130ebf460"

  # ...
end
```

## Template variables

You can use any of the following variables in your formula template, and they'll be substituted when the tap is regenerated:

|Variable|Description|
|-|-|
|`$REPO_DESCRIPTION`|GitHub repository description.|
|`$REPO_WEBSITE`|GitHub repository website, or URL if there isn't one.|
|`$STABLE_VERSION`|Tag name of the latest stable release.|
|`$STABLE_ASSET_URL`|Download URL of the asset from the latest stable release.|
|`$STABLE_ASSET_SHA256`|SHA256 of the asset from the latest stable release.|
|`$DEVEL_VERSION`|Tag name of the latest pre-release.|
|`$DEVEL_ASSET_URL`|Wownload URL of the asset from the latest pre-release.|
|`$DEVEL_ASSET_SHA256`|SHA256 of the asset from the latest pre-release.|

## URL variables

You can use any of the following variables in your URL template, and they'll be substituted for each stable and development release when the tap is regenerated:

|Variable|Description|
|-|-|
|`$VERSION`|The version (e.g. `v1.0.2`.|
|`$VERSION_NUMBER`|The version without the preceding `v` (e.g. `1.0.2`).|

## Configuration options

You can configure Tap Release using the following key in your `.github/tap-release.yml` file:

|Key|Required|Description|
|-|-|-|
|`tap`|Required|The path to the Homebrew tap repository that should be updated.|
|`template`|Required|The template string to use to generate the tap. Use [template variables](#template-variables) to insert the values from the releases.|
|`asset`|Optional|Filename of the asset to use from the release.|
|`url`|Optional|URL pattern to generate the download URLs. Use [URL variables](#url-variables) to insert the values from the release.|
|`branches`|Optional|A list of branches that trigger the tap to be updated when the `.github/tap-release.yml` file is modified. Useful if you want to test the app on a pull request branch. Default is `"master"`.|

Tap Release also supports [Probot Config](https://github.com/probot/probot-config), if you want to store your configuration files in a central repository.
