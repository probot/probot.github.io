---
title: Welcome
description: Welcomes new users
slug: welcome
screenshots:
- https://user-images.githubusercontent.com/13410355/28288851-679f582a-6af5-11e7-8dd8-b85b6c33e16b.png
- https://user-images.githubusercontent.com/13410355/28288547-5f83aa8e-6af4-11e7-9692-eb41d42431e2.png
- https://user-images.githubusercontent.com/13410355/28289605-1ab81a76-6af8-11e7-8f78-6a1b3948df36.png
stars: 89
authors:
- hiimbex
repository: behaviorbot/welcome
updated: 2019-03-12 10:31:55 UTC
host: https://probot-welcome.herokuapp.com
installations: 687
organizations:
- vuejs
- electron
- ant-design
- jekyll
- webtorrent
- overtrue
- videojs
- standard
- nextcloud
- kivy
---


Welcome is a simple way to welcome new users based off maintainer defined comments.

The 3 plugins it combines with are [new-issue-welcome](https://github.com/behaviorbot/new-issue-welcome), [new-pr-welcome](https://github.com/behaviorbot/new-pr-welcome), and [first-pr-merge](https://github.com/behaviorbot/first-pr-merge)

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
