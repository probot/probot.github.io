---
title: Lock Threads
description: Locks closed issues and pull requests.
slug: lock
screenshots:
- https://raw.githubusercontent.com/dessant/lock-threads/master/assets/screenshot.png
authors:
- dessant
repository: dessant/lock-threads
host: https://probot-lock-threads.glitch.me
stars: 9
updated: 2018-03-29 11:19:53 UTC
installations: 12
organizations:
- atom
- kivy
- Semantic-Org
- ethereum
- node-serialport
- nteract
- jahirfiquitiva
- LibreTime
- funky-cactus
- philoserf
---


#### Configuration

Create `.github/lock.yml` in the default branch to enable the app.
The file can be empty, or it can override any of these default settings:

```yml
# Configuration for lock-threads - https://github.com/dessant/lock-threads

# Number of days of inactivity before a closed issue or pull request is locked
daysUntilLock: 365
# Comment to post before locking. Set to `false` to disable
lockComment: >
  This thread has been automatically locked because it has not had recent
  activity. Please open a new issue for related bugs and link to relevant
  comments in this thread.
# Limit to only `issues` or `pulls`
# only: issues
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Issues - **Read & Write**

- Pull requests - **Read & Write**

- Single File - **Read-only**
  - Path: `.github/lock.yml`
