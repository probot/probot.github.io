---
title: Auto Assign
description: Add reviewers/assignees to pull requests when pull requests are opened.
slug: auto-assign
screenshots:
- https://github.com/kentaro-m/auto-assign/raw/master/public/assets/screenshots/screenshot.png
- https://github.com/kentaro-m/auto-assign/raw/master/public/assets/demo.gif
authors:
- kentaro-m
repository: kentaro-m/auto-assign
host: https://kentaro-m-auto-assign.glitch.me/
stars: 35
updated: 2019-07-16 12:01:24 UTC
installations: 66
organizations:
- pypa
- ahmadnassri
- tox-dev
- PHPOffice
- AugurProject
- telus
- PickNikRobotics
- nmrony
- LoyaltyOne
- RagtagOpen
---

## What it does
Auto Assign adds reviewers/assignees to pull requests when pull requests are opened.

## How it works
* When the pull request is opened, automatically add reviewers/assignees to the pull request.
* If the number of reviewers/assignees is specified, randomly add reviewers/assignees to the pull request. 
* If the title of the pull request contains a specific keyword, do not add reviewers/assignees to the pull request.

## Usage
1. [Install the app](https://github.com/apps/auto-assign). 
2. Create `.github/auto_assign.yml` in your repository.

```yaml
# Set to true to add reviewers to pull requests
addReviewers: true

# Set to true to add assignees to pull requests
addAssignees: true

# A list of reviewers to be added to pull requests (GitHub user name)
reviewers:
  - reviewerA
  - reviewerB
  - reviewerC

# A number of reviewers added to the pull request
# Set 0 to add all the reviewers (default: 0)
numberOfReviewers: 0

# A list of assignees, overrides reviewers if set
# assignees:
#   - assigneeA

# A number of assignees to add to the pull request
# Set to 0 to add all of the assignees.
# Uses numberOfReviewers if unset.
# numberOfAssignees: 2

# A list of keywords to be skipped the process that add reviewers if pull requests include it
# skipKeywords:
#   - wip
```

## Contributing
If you have suggestions for how `auto-assign` could be improved, or want to report a bug, [open an issue](https://github.com/kentaro-m/auto-assign/issues/new/choose)! We'd love all and any contributions.