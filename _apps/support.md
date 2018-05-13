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
stars: 10
updated: 2018-05-06 15:05:36 UTC
installations: 28
organizations:
- Homebrew
- mui-org
- kivy
- CachetHQ
- nozzle
- MinecraftForge
- PHPOffice
- wix
- Laravel-Backpack
- Radarr
---

A GitHub App that comments on and closes issues labeled as support requests.

## Usage

1. [Install the GitHub App](https://github.com/apps/support)
2. Create `.github/support.yml` based on the template below
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

# Close issues marked as support requests
close: true

# Lock issues marked as support requests
lock: false
```

## Supporting the Project

Support Requests is an MIT-licensed open source project. Its ongoing
development is made possible thanks to the support of awesome backers.
If you'd like to join them, please consider contributing with
[Patreon](https://www.patreon.com/dessant).
