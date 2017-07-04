---
title: Stale
description: Close stale Issues and Pull Requests
slug: probot-stale
octicon: clock
color: DAECE3
background: http://media.istockphoto.com/vectors/giving-vector-id517930622
screenshots:
- https://user-images.githubusercontent.com/173/27765695-4c016050-5e7e-11e7-9016-c2f6d8c27da4.png
- https://user-images.githubusercontent.com/173/27765705-93f94940-5e7e-11e7-8527-3a91bb64ca70.png
topics:
- project-management
organizations:
- atom
- rails
- homebrew
- exercism
- github
- npm
author: bkeepers
stars: 112
installs: 305
---

After installing the integration, create `.github/stale.yml` in the default branch to enable it:

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
