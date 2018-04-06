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
stars: 123
updated: 2018-01-15 01:35:10 UTC
installations: 105
organizations:
- apex
- RxSwiftCommunity
- chaijs
- ahmetb
- detailyang
- terkelg
- hql287
- probot
- Laravel-Backpack
- evhub
---

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

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).
