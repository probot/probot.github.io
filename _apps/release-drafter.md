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
stars: 311
updated: 2018-11-20 18:30:37 UTC
installations: 140
organizations:
- gorilla
- reactiveui
- concourse
- abraham
- probot
- benbalter
- dotnet
- testcontainers
- idehub
- EasyEngine
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

## Configuration options

You can configure Release Drafter using the following key in your `.github/release-drafter.yml` file:

|Key|Required|Description|
|-|-|-|
|`template`|Required|The template for the body of the draft release. Use [template variables](#template-variables) to insert values.|
|`change-template`|Optional|The template to use for each merged pull request. Use [change template variables](#change-template-variables) to insert values. Default: `* $TITLE ($NUMBER) @$AUTHOR`|
|`no-changes-template`|Optional|The template to use for when there’s no changes. Default: `* No changes`|
|`branches`|Optional|The branches to listen for configuration updates to `.github/release-drafter.yml` and for merge commits. Useful if you want to test the app on a pull request branch. Default is the repository’s default branch.|

Release Drafter also supports [Probot Config](https://github.com/probot/probot-config), if you want to store your configuration files in a central repository. This allows you to share configurations between projects, and create a organization-wide configuration file by creating a repository named `.github` and file named `release-drafter.yml`.

## Template variables

You can use any of the following variables in your `template`:

|Variable|Description|
|-|-|
|`$CHANGES`|The markdown list of pull requests that have been merged.|
|`$CONTRIBUTORS`|A comma separated list of contributors to this release (pull request authors, commit authors, and commit committers).|
|`$PREVIOUS_TAG`|The previous releases’s tag.|

## Change Template variables

You can use any of the following variables in `change-template`:

|Variable|Description|
|-|-|
|`$NUMBER`|The number of the pull request, e.g. `42`|
|`$TITLE`|The title of the pull request, e.g. `Add alien technology`|
|`$AUTHOR`|The pull request author’s username, e.g. `gracehopper`|
