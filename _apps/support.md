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
stars: 19
updated: 2019-01-20 09:22:43 UTC
installations: 45
organizations:
- Homebrew
- mui-org
- gulpjs
- kivy
- wix
- CachetHQ
- nozzle
- PHPOffice
- MinecraftForge
- Laravel-Backpack
---
A GitHub App that comments on and closes issues labeled as support requests.

## Usage

1. **[Install the GitHub App](https://github.com/apps/support)**
   for the intended repositories
2. Create `.github/support.yml` based on the template below
3. Start labeling issues as support requests

#### Configuration

Create `.github/support.yml` in the default branch to enable the app.
The file can be empty, or it can override any of these default settings:

```yaml
# Configuration for support-requests - https://github.com/dessant/support-requests

# Label used to mark issues as support requests
supportLabel: support

# Comment to post on issues marked as support requests, `{issue-author}` is an
# optional placeholder. Set to `false` to disable
supportComment: >
  :wave: @{issue-author}, we use the issue tracker exclusively for bug reports
  and feature requests. However, this issue appears to be a support request.
  Please use our support channels to get help with the project.

# Close issues marked as support requests
close: true

# Lock issues marked as support requests
lock: false

# Assign `off-topic` as the reason for locking. Set to `false` to disable
setLockReason: true

# Repository to extend settings from
# _extends: repo
```

## Supporting the Project

The continued development of Support Requests is made possible
thanks to the support of awesome backers. If you'd like to join them,
please consider contributing with [Patreon](https://www.patreon.com/dessant).
