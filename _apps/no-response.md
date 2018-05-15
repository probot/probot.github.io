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
stars: 27
updated: 2018-04-13 15:51:35 UTC
installations: 74
organizations:
- Homebrew
- prettier
- webtorrent
- ethereum
- standard
- kivy
- caskroom
- eggjs
- wireapp
- explosion
---

Automatically closes Issues where the author hasn't responded to a request for more information.

## App Workflow

The intent of this app is to close issues that have not received a response to a maintainer's request for more information. Many times issues will be filed without enough information to be properly investigated. This allows maintainers to label an issue as requiring more information from the original author. If the information is not received in a timely manner, the issue will be closed. If the original author comes back and gives more information, the label is removed and the issue is reopened if necessary.

### Scheduled

Once per hour, it searches for issues that:

* Are open
* Have a label named the same as the `responseRequiredLabel` value in the configuration
* The `responseRequiredLabel` was applied more than `daysUntilClose` ago

For each issue found, it:

1. If `closeComment` is not `false`, posts the contents of `closeComment`
1. Closes the issue

### `issue_comment` Event

When an `issue_comment` event is received, if all of the following are true:

* The author of the comment is the original author of the issue
* The issue has a label named the same as the `responseRequiredLabel` value in the configuration

It will:

1. Remove the `responseRequiredLabel`
1. Reopen the issue if it was closed

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
