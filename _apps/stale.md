---
title: Stale
description: Close stale Issues and Pull Requests
slug: stale
screenshots:
- https://user-images.githubusercontent.com/173/27765695-4c016050-5e7e-11e7-9016-c2f6d8c27da4.png
- https://user-images.githubusercontent.com/173/27765705-93f94940-5e7e-11e7-8527-3a91bb64ca70.png
authors:
- bkeepers
stars: 734
repository: probot/stale
updated: 2019-07-15 09:10:38 UTC
host: https://probot-stale.herokuapp.com
installations: 1145
organizations:
- facebook
- sebastianbergmann
- atom
- Homebrew
- Shopify
- thedaviddias
- prettier
- NARKOZ
- nwjs
- parse-community
---

Automatically close stale Issues and Pull Requests that tend to accumulate during a project.

## How it works

1. After a period of inactivity, a label will be applied to mark an issue as stale, and optionally a comment will be posted to notify contributors that the Issue or Pull Request will be closed.

1. If the Issue or Pull Request is updated, or anyone comments, then the stale label is removed and nothing further is done until it becomes stale again.

1. If no more activity occurs, the Issue or Pull Request will be automatically closed with an optional comment.

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
