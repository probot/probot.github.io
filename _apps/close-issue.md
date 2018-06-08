---
title: Close Issue
description: Comment on the issues that do not include some contents then close them.
slug: close-issue-bot
screenshots:
- https://raw.githubusercontent.com/offu/close-issue-bot/master/screenshot.png
authors: [ helloqiu, whtsky ]
repository: offu/close-issue-bot
host: https://damp-citadel-91689.herokuapp.com
---
[![Build Status](https://travis-ci.org/offu/close-issue-bot.svg?branch=master)](https://travis-ci.org/offu/close-issue-bot)
[![codecov](https://codecov.io/gh/offu/close-issue-bot/branch/master/graph/badge.svg)](https://codecov.io/gh/offu/close-issue-bot)  
## What It Does
The bot will check new opened and reopened issues if they include some specific contents. Issues not passed will be commented then closed.
## Usage
1. Create a ```/.github/issue-close-bot.yml``` file in your repo. Here's an example:
``` yaml
# Comment that will be sent if an issue is judged to be closed
comment: test
# You can have several configs for different issues.
issueConfigs:
- content:
  - content1
  - content2
  - "🐶"
- content:
  - "🐱"
```
2. Install the [close-issue-bot](https://github.com/apps/close-issue-bot).
3. Enjoy!