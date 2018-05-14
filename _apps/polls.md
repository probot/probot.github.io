---
title: Polls
description: Create polls in GitHub issues.
slug: polls
screenshots:
- https://raw.githubusercontent.com/evenchange4/gh-polls-bot/master/docs/screenshot.png
- https://raw.githubusercontent.com/evenchange4/gh-polls-bot/master/docs/demo.gif
- https://raw.githubusercontent.com/evenchange4/gh-polls-bot/master/docs/logo.png
authors:
- evenchange4
repository: evenchange4/gh-polls-bot
host: https://gh-polls-bot.now.sh
stars: 128
updated: 2018-01-15 01:35:10 UTC
installations: 118
organizations:
- apex
- dawnlabs
- RxSwiftCommunity
- chaijs
- jaegertracing
- ahmetb
- detailyang
- terkelg
- probot
- hql287
---

# GitHub Polls Bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that automatically creates [gh-polls](https://github.com/apex/gh-polls) in GitHub issues.

[![Build Status](https://api.travis-ci.org/evenchange4/gh-polls-bot.svg?branch=master)](https://travis-ci.org/evenchange4/gh-polls-bot) [![codecov](https://codecov.io/gh/evenchange4/gh-polls-bot/branch/master/graph/badge.svg)](https://codecov.io/gh/evenchange4/gh-polls-bot)

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
