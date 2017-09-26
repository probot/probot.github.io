---
title: Request Info
description: Requests more info on issues and pull requests with the default title or an empty body.
slug: request-info
screenshots:
- /assets/screenshots/request-info/1.png
stars: 5
authors: [ hiimbex ]
repository: behaviorbot/request-info
updated: 2017-09-15 14:25:46 UTC
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
