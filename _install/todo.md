---
title: todo
description: Creates new issues from actionable comments in your code.
slug: todo
screenshots:
- https://user-images.githubusercontent.com/10660468/31048765-83569c30-a5f2-11e7-933a-a119d43ad029.png
authors:
- JasonEtco
repository: JasonEtco/todo
host: https://todo-github-app.now.sh
stars: 115
updated: 2018-04-05 14:29:21 UTC
installations: 163
organizations:
- mas-cli
- thibmaek
- heinrichreimer
- Laravel-Backpack
- caarlos0
- SpoonX
- ahmadnassri
- icco
- timvideos
- getantibody
---

## Configuring for your project

There are a couple of configuration options in case you need to change the default behaviour. Note that the defaults are likely fine for most projects, so you might not need to change them.

Add a `todo` object in your `.github/config.yml` file like this:

```yml
todo:
  keyword: "@makeAnIssue"

```

# Deploying

If you would like to run your own instance of this app, see the [docs for deployment](https://probot.github.io/docs/deployment/).

This plugin requires these **Permissions** for the GitHub App:

- Issues - **Read & Write**
  - No necessary events
- Pull requests - **Read & Write**
  - No necessary Events
- Repository Contents - **Read-only**

You'll also need to enable the following **Webhook Events**:
  - **Push**
  - **Pull Requests**
