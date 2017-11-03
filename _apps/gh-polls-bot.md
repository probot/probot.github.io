---
# A human-friendly name of your listing
title: Polls
# A short description of what your app does
description: Automatically create polls in GitHub issues.
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: gh-polls-bot
# Include a few screenshots that show your app in action
screenshots:
- https://raw.githubusercontent.com/evenchange4/gh-polls-bot/master/docs/screenshot.png
- https://raw.githubusercontent.com/evenchange4/gh-polls-bot/master/docs/demo.gif
- https://raw.githubusercontent.com/evenchange4/gh-polls-bot/master/docs/logo.png
authors:
# The GitHub usernames of anyone who authored the app
authors: [ evenchange4 ]
# The repository where the code is located
repository: evenchange4/gh-polls-bot
# The address where this app is deployed
host: https://gh-polls-bot.now.sh
---

# GitHub Polls Bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that automatically creates [gh-polls](https://github.com/apex/gh-polls) in GitHub issues.

[![Travis][travis-badge]][travis]
[![Codecov Status][codecov-badge]][codecov]
[![license][license-badge]][license]

## Usage

1. Configure the GitHub App: [github.com/apps/polls](https://github.com/apps/polls)
2. Add command to issue:

```md
/polls Option1 'Option 2' "Option 3"

# Automatically replace with the following markdown =>
[![](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXZMATAZ5BXF8RVRAMRSSANA/Option1)](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXZMATAZ5BXF8RVRAMRSSANA/Option1/vote)
[![](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXZMATAZ5BXF8RVRAMRSSANA/Option%202)](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXZMATAZ5BXF8RVRAMRSSANA/Option%202/vote)
[![](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXZMATAZ5BXF8RVRAMRSSANA/Option%203)](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BXZMATAZ5BXF8RVRAMRSSANA/Option%203/vote)
```

## LICENSE

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[travis-badge]: https://img.shields.io/travis/evenchange4/gh-polls-bot/master.svg?style=flat-square
[travis]: https://travis-ci.org/evenchange4/gh-polls-bot
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/gh-polls-bot.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/gh-polls-bot?branch=master
[license-badge]: https://img.shields.io/github/license/evenchange4/gh-polls-bot.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
