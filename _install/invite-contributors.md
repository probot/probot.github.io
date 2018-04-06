---
title: invite-contributors
description: Invite authors of merged pull requests to your organization
slug: invite-contributors
screenshots:
- https://i.imgur.com/IoTF1aD.png
authors:
- erickzhao
repository: erickzhao/invite-contributors
stars: 17
updated: 2017-11-06 05:29:49 UTC
host: https://vast-stream-78160.herokuapp.com
installations: 14
organizations:
- Laravel-Backpack
- cla-assistant
- contentful-userland
- flyve-mdm
- LibreTime
- aethonanbot
- sydneyhaskell
- elofyi
- dddpppmmm
- funky-cactus
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
  - Path: `.github/stale.yml`
