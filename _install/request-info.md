---
title: Request Info
description: Requests more info on issues and pull requests with the default title
  or an empty body.
slug: request-info
screenshots:
- https://user-images.githubusercontent.com/13410355/28132821-d37bf2a8-66f2-11e7-9e7b-5930ba65d67a.png
stars: 20
authors:
- hiimbex
repository: behaviorbot/request-info
updated: 2018-02-27 09:06:08 UTC
host: https://probot-request-info.herokuapp.com
installations: 103
organizations:
- nlohmann
- eggjs
- cdnjs
- electron-userland
- desktop
- jsonresume
- nozzle
- bolt
- hql287
- probot
---

## Usage

 Add a `.github/config.yml` file that contains the following:

```yml
# Configuration for request-info - https://github.com/behaviorbot/request-info

# *Required* Comment to reply with
requestInfoReplyComment: >
  We would appreciate it if you could provide us with more info about this issue/pr!

# *OPTIONAL* default titles to check against for lack of descriptiveness
# MUST BE ALL LOWERCASE
requestInfoDefaultTitles:
  - update readme.md
  - updates


# *OPTIONAL* Label to be added to Issues and Pull Requests with insufficient information given
requestInfoLabelToAdd: needs-more-info
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Issues - **Read & Write**
  - [x] Check the box for **Issues** events
- Pull requests - **Read & Write**
  - [x] Check the box for **Pull request** events
- Single File - **Read-only**
  - Path: `.github/config.yml`
