---
title: Support Requests
description: Comments on and closes issues labeled as support requests.
slug: support
screenshots:
- https://raw.githubusercontent.com/dessant/support-requests/master/assets/screenshot.png
authors:
- dessant
repository: dessant/support-requests
host: https://probot-support-requests.glitch.me
stars: 8
updated: 2018-01-16 00:22:33 UTC
installations: 23
organizations:
- mui-org
- kivy
- CachetHQ
- nozzle
- MinecraftForge
- PHPOffice
- Laravel-Backpack
- wix
- Radarr
- GameServerManagers
---

## Usage

1. [Install the GitHub App](https://github.com/apps/support)
2. Create `.github/support.yml` based on the following template
3. Start labeling issues as support requests

Create `.github/support.yml` in the default branch to enable the app.
The file can be empty, or it can override any of these default settings:

```yml
# Configuration for support-requests - https://github.com/dessant/support-requests

# Label used to mark issues as support requests
supportLabel: support
# Comment to post on issues marked as support requests. Add a link
# to a support page, or set to `false` to disable
supportComment: >
  👋 We use the issue tracker exclusively for bug reports and feature requests.
  However, this issue appears to be a support request. Please use our
  support channels to get help with the project.
# Whether to close issues marked as support requests
close: true
# Whether to lock issues marked as support requests
lock: false
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Issues - **Read & Write**
  - [x] Check the box for **Issues** events
- Single File - **Read-only**
  - Path: `.github/support.yml`
