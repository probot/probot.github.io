---
title: Settings
description: Pull Requests for repository settings
slug: settings
stars: 201
authors:
- bkeepers
repository: probot/settings
screenshots:
- https://user-images.githubusercontent.com/173/29472917-3fad9db0-841b-11e7-8f6d-a6c63052122b.png
updated: 2018-04-05 00:23:14 UTC
host: https://github-configurer.herokuapp.com
installations: 128
organizations:
- apollographql
- CNXTEoEorg
- denysdovhan
- bkeepers
- chaijs
- wp-cli
- probot
- benbalter
- TGMPA
- purpleidea
---

This GitHub App syncs repository settings defined in `.github/settings.yml` to GitHub, enabling Pull Requests for repository settings.

## Usage

1. **[Install the app](https://github.com/apps/settings/installations/new)**.
2. Create a `.github/settings.yml` file in your repository. Changes to this file on the default branch will be synced to GitHub.

All settings are optional.

```yaml
repository:
  # See https://developer.github.com/v3/repos/#edit for all available settings.

  # The name of the repository. Changing this will rename the repository
  name: repo-name

  # A short description of the repository that will show up on GitHub
  description: description of repo

  # A URL with more information about the repository
  homepage: https://example.github.io/

  # Either `true` to make the repository private, or `false` to make it public.
  private: false

  # Either `true` to enable issues for this repository, `false` to disable them.
  has_issues: true

  # Either `true` to enable the wiki for this repository, `false` to disable it.
  has_wiki: true

  # Either `true` to enable downloads for this repository, `false` to disable them.
  has_downloads: true

  # Updates the default branch for this repository.
  default_branch: master

  # Either `true` to allow squash-merging pull requests, or `false` to prevent
  # squash-merging.
  allow_squash_merge: true

  # Either `true` to allow merging pull requests with a merge commit, or `false`
  # to prevent merging pull requests with merge commits.
  allow_merge_commit: true

  # Either `true` to allow rebase-merging pull requests, or `false` to prevent
  # rebase-merging.
  allow_rebase_merge: true

# Labels: define labels for Issues and Pull Requests
labels:
  - name: bug
    color: CC0000
  - name: feature
    color: 336699
  - name: first-timers-only
    # include the old name to rename and existing label
    oldname: Help Wanted

# Collaborators: give specific users access to this repository.
collaborators:
  - username: bkeepers
    # Note: Only valid on organization-owned repositories.
    # The permission to grant the collaborator. Can be one of:
    # * `pull` - can pull, but not push to or administer this repository.
    # * `push` - can pull and push, but not administer this repository.
    # * `admin` - can pull, push and administer this repository.
    permission: push

  - username: hubot
    permission: pull

  - username:
    permission: pull

```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub Integration:

- Repository administration: **Read & Write**
- Repository contents: **Read only**
  - [x] Check the box for **Push** events
- Single file: **Read & Write**
  - Path: `.github/settings.yml`
