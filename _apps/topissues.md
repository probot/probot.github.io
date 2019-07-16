---
title: Top Issues
description: Labels issues with the most "+1" emoji reactions
slug: top-issues
screenshots:
- https://raw.githubusercontent.com/adamzolyak/gh-vote-bot/master/docs/issue_list.png
- https://raw.githubusercontent.com/adamzolyak/gh-vote-bot/master/docs/issue_detail.png
authors:
- adamzolyak
repository: adamzolyak/gh-vote-bot
host: https://gh-vote-bot.herokuapp.com
stars: 8
updated: 2018-10-23 18:43:20 UTC
installations: 28
organizations:
- reactiveui
- swagger-api
- PrestaShop
- theme-next
- pypa
- GameServerManagers
- tox-dev
- pyload
- unoplatform
- techqueria
---

## How It Works

The Top Issues bot runs every 25 minutes, labeling top issues and unlabeling issues that are no longer top issues.  Top issues are issues with the most "+1" emoji reactions on the issue description.  "+1" emoji reactions on issues comments are not considered.  

## Installation

After installing the app, create a `topissuebot.yml` file to the `.github` directory to enable the bot. The file must contain the following properties.  Customize the values as desired.

```yml
# Configuration for top-issue-bot
labelName: ":thumbsup: Top Issue!"
labelColor: "f442c2"
numberOfIssuesToLabel: 5
```
