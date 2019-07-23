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
stars: 22
updated: 2019-07-13 09:04:29 UTC
installations: 185
organizations:
- dollarshaveclub
- bkeepers
- pivotal
- LiveRamp
- SPSCommerce
- telus
- octopart
- LEGO
- logrhythm
- njzjz
---

# Prevent-Public-Repos Probot App

A GitHub Probot App that monitors and prevents Public Repositories from being created in an organization.


## Features
- Can convert newly created Public Repos to Private
- Can also be enabled for repos that switch visibility from private to public
  - Not enabled by default it is possible to restrict visibility changes to org owners [directly in GitHub](https://help.github.com/articles/repository-permission-levels-for-an-organization/#changing-the-visibility-of-repositories).
- Will create an issue in the repo explaining the action
- Monitor only mode will not change the repo visibility but will still create an issue
- Can set configuration parameters by using YAML file set in a specific repo for the entire org
- Can exclude certain repos
- Can set a list of users/groups to cc on every issue created

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

## Deployment

See [docs/deploy.md](https://github.com/issc29/probot-prevent-public-repos/blob/master/docs/deploy.md) if you would like to run your own instance of this app.

Possible Environment Variables:
- FILE_NAME [default: '.github/prevent-public-repos.yml'] - Sets the location/file name of the config yml file
- ORG_WIDE_REPO_NAME [default: 'org-settings'] - Set the repo where to find the config yml file
