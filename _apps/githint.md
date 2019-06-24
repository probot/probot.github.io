---
title: GitHint
description: GitHint ensures that your pull requests follow specified conventions.
slug: githint-bot
screenshots:
- https://githint.herokuapp.com/images/screenshots/passing-tests.png
authors: [chieze-franklin]
repository: chieze-franklin/githint-bot
host: https://githint-bot.herokuapp.com/
stars: 6
updated: 2019-06-24 22:42:00 UTC
installations: 6
organizations:
- andela
---

GitHint ensures that your pull requests follow specified conventions.

![](https://githint.herokuapp.com/images/screenshots/passing-tests.png)

There are conventions that may not be easily checked with tools like ESLint or Hound CI. These could range from arbitrary checks like `A pull request must be raised by a user whose first name is not more than 6 characters long` to more practical checks like `A pull request must have at least 2 review comments`. GitHint thrives on checking these kinds of conventions.

GitHint fetches metadata about pull requests, commits, branches, trees, and passes the metadata to user-defined scripts for evaluation. Such scripts are expected to return `true` or `false` to determine if a pull request is ready to be merged.

To start using GitHint, first install the [GitHint GitHub app](https://github.com/apps/githint-bot) on your repository and add a [.githint.json file](https://githint.herokuapp.com/config) to the root directory of the repository. That's it!

For more info visit the [documentation](https://githint.herokuapp.com/).
