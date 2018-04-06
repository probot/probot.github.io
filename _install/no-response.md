---
title: No Response
description: Closes Issues where the author hasn't responded to a request for more
  information.
slug: no-response
screenshots:
- https://raw.githubusercontent.com/probot/no-response/master/docs/no-response-test.png
authors:
- lee-dohm
repository: probot/no-response
host: https://probot-no-response.herokuapp.com
stars: 24
updated: 2018-01-09 17:55:34 UTC
installations: 42
organizations:
- prettier
- ethereum
- kivy
- wireapp
- eggjs
- CachetHQ
- Graylog2
- electron-userland
- rmm5t
- probot
---

## Usage

1. **[Configure the GitHub App](https://github.com/apps/no-response)**
2. Create `.github/no-response.yml`

A `.github/no-response.yml` file is required to enable the app. The file can be empty, or it can override any of these default settings:

```yml
# Configuration for probot-no-response - https://github.com/probot/no-response

# Number of days of inactivity before an Issue is closed for lack of response
daysUntilClose: 14
# Label requiring a response
responseRequiredLabel: more-information-needed
# Comment to post when closing an Issue for lack of response. Set to `false` to disable
closeComment: >
  This issue has been automatically closed because there has been no response
  to our request for more information from the original author. With only the
  information that is currently in the issue, we don't have enough information
  to take action. Please reach out if you have or find the answers we need so
  that we can investigate further.
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Issues - **Read & Write**
  - [x] Check the box for **Issue comment** events
  - [x] Check the box for **Issues** events
- Single File - **Read-only**
  - Path: `.github/no-response.yml`
