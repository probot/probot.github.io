---
title: Stale
description: Close stale Issues and Pull Requests
slug: stale
screenshots:
- https://user-images.githubusercontent.com/173/27765695-4c016050-5e7e-11e7-9016-c2f6d8c27da4.png
- https://user-images.githubusercontent.com/173/27765705-93f94940-5e7e-11e7-8527-3a91bb64ca70.png
authors:
- bkeepers
stars: 339
repository: probot/stale
updated: 2018-04-05 14:13:44 UTC
host: https://probot-stale.herokuapp.com
installations: 606
organizations:
- atom
- facebook
- Homebrew
- Shopify
- Semantic-Org
- nwjs
- prettier
- gohugoio
- ethereum
- storybooks
---

## Installation

After installing the app, create `.github/stale.yml` in the default branch to enable it:

```yml
# Number of days of inactivity before an issue becomes stale
daysUntilStale: 60
# Number of days of inactivity before a stale issue is closed
daysUntilClose: 7
# Issues with these labels will never be considered stale
exemptLabels:
  - pinned
  - security
# Label to use when marking an issue as stale
staleLabel: wontfix
# Comment to post when marking an issue as stale. Set to `false` to disable
markComment: >
  This issue has been automatically marked as stale because it has not had
  recent activity. It will be closed if no further activity occurs. Thank you
  for your contributions.
# Comment to post when closing a stale issue. Set to `false` to disable
closeComment: false
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Issues - **Read & Write**
  - [x] Check the box for **Issue comment** events
  - [x] Check the box for **Issues** events
- Pull requests - **Read & Write**
  - [x] Check the box for **Pull request** events
  - [x] Check the box for **Pull request review** events
  - [x] Check the box for **Pull request review comment** events
- Single File - **Read-only**
  - Path: `.github/stale.yml`
