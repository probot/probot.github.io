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
stars: 20
updated: 2019-06-10 07:25:40 UTC
installations: 60
organizations:
- Homebrew
- mui-org
- ReactTraining
- gulpjs
- kivy
- wix
- getredash
- CachetHQ
- PHPOffice
- cefsharp
---
A GitHub App that comments on and closes issues labeled as support requests.

## Usage

1. **[Install the GitHub App](https://github.com/apps/support)**
   for the intended repositories
2. Create `.github/support.yml` based on the template below
3. Start labeling issues as support requests

**If possible, install the app only for select repositories.
Do not leave the `All repositories` option selected, unless you intend
to use the app for all current and future repositories.**

#### Configuration

Create `.github/support.yml` in the default branch to enable the app,
or add it at the same file path to a repository named `.github`.
The file can be empty, or it can override any of these default settings:

```yaml
# Configuration for Support Requests - https://github.com/dessant/support-requests

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

