---
title: History
description: Notifies contributors when a change in history has occurred.
slug: history
screenshots:
- https://user-images.githubusercontent.com/25513006/40001110-229e98b0-5796-11e8-8924-79bd0cbb91f2.png
authors: [ nickgarlis ]
repository: nickgarlis/probot-history
host: https://probot-history.now.sh
---

## Usage

1. **[Configure the GitHub App](https://github.com/apps/history)**
2. Create `.github/history.yml` based on the following template
3. You are done!

A `.github/history.yml` file is required to enable the plugin. The file can be empty, or it can override any of these default settings:

```yml
# Configuration for probot-history - https://github.com/nickgarlis/probot-history

# Label to use when creating an issue
historyLabel: history

# Title to use when creating an issue.
issueTitle: Attention, contributors

# Comment to post when creating an issue.
issueComment: >
  It appears that a change in history has occurred.
  If you plan on contributing to this project please
  delete your fork and make a new one.
  We apologize for the inconvenience.
```
