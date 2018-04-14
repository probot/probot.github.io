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
stars: 10
updated: 2018-03-29 11:19:53 UTC
installations: 14
organizations:
- atom
- kivy
- Semantic-Org
- ethereum
- chef
- node-serialport
- nteract
- jahirfiquitiva
- LibreTime
- baas-cloud
---

A GitHub App that locks closed issues and pull requests after
a period of inactivity.

## Usage

1. **[Install the GitHub App](https://github.com/apps/lock)**
2. Create `.github/lock.yml` based on the template below
3. It will start scanning for closed issues and/or pull requests within an hour

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

## Supporting the Project

Lock Threads is an MIT-licensed open source project. Its ongoing
development is made possible thanks to the support of awesome backers.
If you'd like to join them, please consider contributing with
[Patreon](https://www.patreon.com/dessant).
