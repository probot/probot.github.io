---
title: Request Info
description: Requests more info on issues and pull requests with the default
  title or an empty body.
slug: request-info
screenshots:
  - https://user-images.githubusercontent.com/13410355/28132821-d37bf2a8-66f2-11e7-9e7b-5930ba65d67a.png
stars: 94
authors:
  - hiimbex
repository: behaviorbot/request-info
updated: 2021-06-25 08:32:12 UTC
host: https://probot-request-info.herokuapp.com
installations: 1123
organizations:
  - Homebrew
  - ant-design
  - thedaviddias
  - webtorrent
  - overtrue
  - apache
  - standard
  - nlohmann
  - invertase
  - HeroTransitions
---


Request-Info requests more info from newly opened Pull Requests and Issues that contain either default titles or whose description is left blank. It does so by taking data from a `.github/config.yml`.

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
