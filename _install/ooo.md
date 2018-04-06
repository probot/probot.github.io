---
title: OOO
description: Respond to @mentions with an auto-response when you are OOO
slug: ooo
screenshots:
- https://user-images.githubusercontent.com/27806/34545993-8e21b866-f0b6-11e7-9cc4-750d6f9b2ed5.png
- https://user-images.githubusercontent.com/27806/34633882-c505d878-f244-11e7-89c2-c367afdb738a.png
authors:
- swinton
repository: swinton/probot-ooo
host: https://probot-ooo.herokuapp.com
stars: 6
updated: 2018-01-06 15:08:10 UTC
installations: 6
organizations:
- CachetHQ
- Laravel-Backpack
- matthewmccullough
- JasonEtco
- SuriyaaKudoIsc
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
