---
title: Close Issue
description: Comment on the issues that do not include some contents then close them.
slug: close-issue-app
screenshots:
- https://raw.githubusercontent.com/offu/close-issue-app/master/screenshot.png
authors:
- helloqiu
- whtsky
repository: offu/close-issue-app
host: https://close-issue-app.herokuapp.com
stars: 22
updated: 2019-07-17 19:30:12 UTC
installations: 56
organizations:
- Homebrew
- ant-design
- react-boilerplate
- vuetifyjs
- travis-ci
- android-hacker
- vueComponent
- coreos
- CopyTranslator
- offu
---
[![Build Status](https://travis-ci.org/offu/close-issue-app.svg?branch=master)](https://travis-ci.org/offu/close-issue-app)
[![codecov](https://codecov.io/gh/offu/close-issue-app/branch/master/graph/badge.svg)](https://codecov.io/gh/offu/close-issue-app)  
## What It Does
The app will check new opened and reopened issues if they include some specific contents. Issues not passed will be commented then closed.
## Usage
1. Create a `.github/issue-close-app.yml` file in your repo. Here's an example:
``` yaml
# Comment that will be sent if an issue is judged to be closed
comment: "This issue is closed because it does not meet our issue template. Please read it."
issueConfigs:
# There can be several configs for different kind of issues.
- content:
# Example 1: bug report
  - "Expected Behavior"
  - "Current Behavior"
  - "Steps to Reproduce"
  - "Detailed Description"
- content:
# Example 2: feature request
  - "Motivation / Use Case"
  - "Expected Behavior"
  - "Other Information"
# The issue is judged to be legal if it includes all keywords from any of these two configs.
# Or it will be closed by the app.
```
The config file is **required** to run this app. And there is no **default config**. If the app can not find a valid config file, it will ignore requests from the repo.
2. Install the [close-issue-app](https://github.com/apps/close-issue-app).
3. Enjoy!