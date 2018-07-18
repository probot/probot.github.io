---
title: Unfurl Links
description: Add context to the links shared in discussions
slug: unfurl-links
screenshots:
- https://user-images.githubusercontent.com/173/32036265-57a501ca-b9e4-11e7-9db3-52374fb7290c.png
authors:
- bkeepers
repository: probot/unfurl
host: http://probot-unfurl.herokuapp.com
stars: 29
updated: 2018-04-05 18:55:32 UTC
installations: 60
organizations:
- reactiveui
- probot
- goreleaser
- GameServerManagers
- caarlos0
- wangzuo
- xcodeswift
- thefrontside
- jahirfiquitiva
- timvideos
---

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Issues - **Read & Write**
  - [x] Check the box for **Issue comment** events
  - [x] Check the box for **Issues** events
- Pull requests - **Read & Write**
  - [x] Check the box for **Pull request** events
  - [x] Check the box for **Pull request review** events
  - [x] Check the box for **Pull request review comment** events
- Single File - **Read-only**
  - Path: `.github/config.yml`
