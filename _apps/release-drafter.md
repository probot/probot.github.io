---
title: Release Drafter
description: Drafts your next release notes as pull requests are merged into master.
slug: release-drafter
screenshots:
- https://raw.githubusercontent.com/toolmantim/release-drafter/master/design/screenshot.png
authors:
- toolmantim
repository: toolmantim/release-drafter
host: https://release-drafter.now.sh
stars: 217
updated: 2018-08-02 19:59:15 UTC
installations: 42
organizations:
- abraham
- benbalter
- balloob
- jeanregisser
- home-assistant
- nashaofu
- palkan
- toolmantim
- motss
- buschtoens
---

## Usage

1. Install the [Release Drafter GitHub App](https://github.com/apps/release-drafter) into the repositories you wish to create releases in.
2. Add a `.github/release-drafter.yml` configuration file to each repository.

## Example

For example, take the following `.github/release-drafter.yml` file in a repository:

```yml
template: |
  ## What's Changed

  $CHANGES
```

As pull requests are merged, a draft release is kept up-to-date listing the changes, ready to publish when you’re ready.

## Template variables

You can use any of the following variables in your template, and they’ll be substituted when the release is regenerated:

|Variable|Description|
|-|-|
|`$CHANGES`|The markdown list of pull requests that have been merged.|
|`$PREVIOUS_TAG`|The previous releases’s tag.|

## Configuration options

You can configure Release Drafter using the following key in your `.github/release-drafter.yml` file:

|Key|Required|Description|
|-|-|-|
|`template`|Required|The template for the body of the draft release. Use [template variables](#template-variables) to insert values.|
|`branches`|Optional|The branches to listen for configuration updates to `.github/release-drafter.yml` and for merge commits. Useful if you want to test the app on a pull request branch. Default is the repository’s default branch.|

Release Drafter also supports [Probot Config](https://github.com/probot/probot-config), if you want to store your configuration files in a central repository.
