---
title: Welcome
description: Welcomes new users
slug: welcome
screenshots:
- /assets/screenshots/welcome/1.png
- /assets/screenshots/welcome/2.png
- /assets/screenshots/welcome/3.png
stars: 15
authors: [ hiimbex ]
repository: behaviorbot/welcome
updated: 2017-09-15 14:50:57 UTC
---


Welcome is a simple way to welcome new users based off maintainer defined comments.

The 3 plugins it combines with are [new-issue-welcome](https://github.com/behaviorbot/new-issue-welcome), [new-pr-welcome](https://github.com/behaviorbot/new-issue-welcome), and [first-pr-merge](https://github.com/behaviorbot/new-issue-welcome)

Create a `.github/config.yml` file to declare the contents of the comments:

``` yaml
# Configuration for new-issue-welcome - https://github.com/behaviorbot/new-issue-welcome

# Comment to be posted to on first time issues
newIssueWelcomeComment: >
  Thanks for opening your first issue here! Be sure to follow the issue template!

# Configuration for new-pr-welcome - https://github.com/behaviorbot/new-pr-welcome

# Comment to be posted to on PRs from first time contributors in your repository
newPRWelcomeComment: >
  Thanks for opening this pull request! Please check out our contributing guidelines.

# Configuration for first-pr-merge - https://github.com/behaviorbot/first-pr-merge

# Comment to be posted to on pull requests merged by a first time user
firstPRMergeComment: >
  Congrats on merging your first pull request! We here at behaviorbot are proud of you!

# It is recommend to include as many gifs and emojis as possible
```

You can opt out of having the bot comment on first time pull requests, pull request merges, or new issues by not filling in a value for each app's respective field.
