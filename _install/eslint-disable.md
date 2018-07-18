---
title: ESLint Disable Watcher
description: Comments on pull requests that try to disable eslint rules.
slug: eslint-disable-watcher
screenshots:
- https://user-images.githubusercontent.com/318208/36699828-d1a92b82-1b45-11e8-9a4d-91da0852d7da.png
authors:
- koddsson
repository: koddsson/eslint-disable-probot
host: https://eslint-disable-probot.herokuapp.com
stars: 9
updated: 2018-03-23 23:06:25 UTC
installations: 4
organizations:
- ID-BPHC
---

## Configuration

You don't need any configuration for this to work in your project but you can customize a few things to fit your needs. You can create a `.github/eslint-disable-bot.yml` file:

```yml
# Change this to set the number of comments the watcher should comment on a given PR.
commentLimit: 10
# The message the bot will post on any lines containing a eslint disable comment.
commentMessage: Please don't disable eslint rules :pray:
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).
