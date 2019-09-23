---
# A human-friendly name of your listing
title: Semantic PR Title
# A short description of what your app does
description: Verifies PR title complies with Angular commit convention standard (or custom regex).
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: semantic-pr-title
# Include a few screenshots that show your app in action
screenshots:
- https://marketplace-screenshots.githubusercontent.com/5213/60c9af00-da06-11e9-92a1-f5190f364574?auto=webp&format=jpeg&width=670
- https://marketplace-screenshots.githubusercontent.com/5213/6aebad80-da06-11e9-858b-a6d7a6a051e1?auto=webp&format=jpeg&width=670
# The GitHub usernames of anyone who authored the app
authors: [ coleHafner ]
# The repository where the code is located
repository: coleHafner/semantic-pr-title
# The address where this app is deployed
host: https://colehafner-pr-title-linter-1.glitch.me/probot
---

# Semantic PR Title

> A GitHub App built with [Probot](https://github.com/probot/probot) that enforces your PR title to match a user defined regex.

## Config
Add a file @ `.github/semantic-pr-title.yml` with the following:

```
REGEX: <your regex here>
```
The default regex enforces the [angular commit convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) (first line) on your PR title: `(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\\([a-z0-9\\s]+\\))?(:\\s)([a-z0-9\\s]+)`

Note that the regex is a string and `\` must be escaped. 


## Usage
This app is [hosted on Glitch](https://colehafner-pr-title-linter-1.glitch.me) and available on [the GitHub marketplace](https://github.com/marketplace/semantic-pr-title).


_Docs last updated on 9/23/2019. See [README](https://github.com/coleHafner/semantic-pr-title#config) here for most up-to-date docs._
