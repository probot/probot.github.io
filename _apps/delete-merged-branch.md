---
title: Delete merged branch
description: No more manually deleting merged branches, this lovely app does it for
  you.
slug: delete-merged-branch
screenshots:
- https://user-images.githubusercontent.com/24505883/42899819-7c05a47a-8ac7-11e8-8be9-9e3888f1bedc.gif
authors:
- svanboxel
repository: svanboxel/delete-merged-branch
host: https://delete-merged-branch.now.sh
stars: 156
updated: 2019-07-18 09:23:59 UTC
installations: 1580
organizations:
- symonds
- onoranzefunebricloud
- karhoo
- hangy
- hangy
- bridgecrewio
- emisgroup
- alphabrik
- whizzscooters
- Introhive
---

# Delete merged branch

> A GitHub app that automatically deletes a branch after it's merged. That's it, enjoy! 

## Application logic
Only PRs that actually get approved and merged will be automatically flagged for deletion. The usual flow will be as follows:
 1. Author opens a PR from a feature branch.
 2. PR gets reviewed and CI runs.
 3. Reviewer or author merges the PR.
 4. The feature branch gets deleted by this app.
 
The following flow doesn't result in deletion of the branch:
 1. Author opens a PR from a feature branch.
 2. PR gets reviewed and CI runs.
 3. CI fails/PR gets declined.
 4. Reviewer or author decides to close the PR without merging it.
 
## Installation

Want to try it out? You can install the app directly from [**this page**](https://github.com/apps/delete-merged-branch).

See [readme.md](https://github.com/SvanBoxel/delete-merged-branch/blob/master/README.md) if you would like to run your own instance of this app.

## Feedback?

Please [**open an issue**](https://github.com/SvanBoxel/delete-merged-branch/issues/new)
