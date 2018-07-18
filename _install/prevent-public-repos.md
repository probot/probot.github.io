---
title: Prevent Public Repos
description: Prevent Repos from being made public in an organization
slug: prevent-public-repos
screenshots:
- https://user-images.githubusercontent.com/6920330/33576380-9a90cc92-d90d-11e7-9e61-6512240cdbf6.png
authors:
- issc29
repository: issc29/probot-prevent-public-repos
host: https://probot-prevent-public-repos.herokuapp.com
stars: 6
updated: 2017-12-08 16:19:00 UTC
installations: 17
organizations:
- telusdigital
- logrhythm
- engineersmy
- nytm
- finnerds
- Albatoss
---

## Get Started

1. [Configure the GitHub App](https://github.com/apps/prevent-public-repos)
2. [Recommended] Create repo named `org-settings` and in it a file `.github/prevent-public-repos.yml` as described in the [How it Works](#How-it-Works) section to configure settings (and override defaults)
3. It will then prevent public repos from being created

## How it Works

By default when a new repository is created with Public visibility, an Issue will be created in the repository warning that it is Public to the internet [Monitor-Only mode is enabled].

A `.github/prevent-public-repos.yml` file is recommended to override the [default settings](https://github.com/issc29/probot-prevent-public-repos/blob/master/lib/defaults.js) created in Repository `org-settings`. This repository will contain global settings for the organization.

```yml
# Configuration for Prevent-Public-Repos

# Turn on Monitor Mode. In this mode the repo visibility is not modified and only an Issue is created
monitorOnly: true

# Enables detection of repos that change visibility from private to public (not just newly created ones)
enablePrivateToPublic: false

# Issue Title when repo is privatized
privatizedIssueTitle: '[CRITICAL] Public Repositories are Disabled for this Org'

# Issue Body when repo is privatized
privatizedIssueBody: 'NOTE: Public Repos are disabled for this organization! Repository was automatically converted to a Private Repo. Please contact an admin to override.'

# Issue Title when monitor mode is enabled
monitorIssueTitle: '[CRITICAL] Public Repository Created'

# Issue Body when monitor mode is enable
monitorIssueBody: 'Please note that this repository is publicly visible to the internet!'

# Users/Groups that should be cc'ed on the issue. Should be users/groups separated by a space.
# ccList: '@user123 @user456'

# Repos to  exclude in detection. Should be a List of Strings.
# excludeRepos: ['repo1', 'repo2']
```

When setting up this Probot App you can also set a number of Environment Variables

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Repository administration - **Read & Write**
  - [x] Check the box for **Repository events** events
  - [x] Check the box for **Public events** events
- Single File - **Read-only**
  - Path: `.github/prevent-public-repos.yml`
