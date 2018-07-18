---
title: Move Issues
description: Moves issues to a different repository.
slug: move
screenshots:
- https://raw.githubusercontent.com/dessant/move-issues/master/assets/source-issue.png
- https://raw.githubusercontent.com/dessant/move-issues/master/assets/target-issue.png
authors:
- dessant
repository: dessant/move-issues
host: https://probot-move-issues.glitch.me
stars: 9
updated: 2018-01-16 00:15:03 UTC
installations: 27
organizations:
- atom
- home-assistant
- kivy
- CachetHQ
- ethereum
- probot
- GameServerManagers
- bpkg
- jahirfiquitiva
- eXist-db
---

#### Configuration

Create `.github/move.yml` in the default branch to enable the app.
The file can be empty, or it can override any of these default settings:

```yml
# Configuration for move-issues - https://github.com/dessant/move-issues

# Delete the command comment. Ignored when the comment also contains other content
deleteCommand: true
# Close the source issue after moving
closeSourceIssue: true
# Lock the source issue after moving
lockSourceIssue: false
# Set custom aliases for targets
# aliases:
#   r: repo
#   or: owner/repo
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Issues - **Read & Write**
  - [x] Check the box for **Issue comment** events

- Single File - **Read-only**
  - Path: `.github/move.yml`
