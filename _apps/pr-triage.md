---
title: PR Triage
description: Add a label depending on the pull request's status
slug: pr-triage
screenshots:
- https://raw.githubusercontent.com/pr-triage/app/master/public/assets/screenshots/main.png
- https://raw.githubusercontent.com/pr-triage/app/master/public/assets/screenshots/workflow.png
- https://raw.githubusercontent.com/pr-triage/app/master/public/assets/screenshots/privacy.png
authors:
- sotayamashita
repository: pr-triage/app
host: https://pr-triage.glitch.me
stars: 31
updated: 2019-07-12 04:50:00 UTC
installations: 65
organizations:
- getredash
- thepracticaldev
- kazupon
- HcySunYang
- awesome-css-group
- Unibeautify
- Human-Connection
- TiagoDanin
- vuejs
- LinioIT
---

## Motivation

Firstly, I started to create PRTriage to solve my own pain. As an engineer, I spent my time to ask colleagues Pull Requests status such as `WIP (work in progress)`・`UNREVIEWED`・`CHANGES_REQUESTED`・`APPROVED`. Most of the developers use [GitHub](https://github.com) and follow [GitHub Flow](https://guides.github.com/introduction/flow/)/[Git Flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html). Most of them say that the time it takes to know pull request status is getting increasing as the team is large so I published it as Open Source :sparkles:.

## Installation

Please follow the below steps to install quickly :rocket::

1. Go to [PRTriage App top page](https://probot.github.io/apps/pr-triage/)
1. Click **"+ Add to GitHub"** button
1. Choose a repository
1. That's it :sparkles:

## How it works

Only watching the most recent commit :eyes::

- Do nothing when the PR's title starts from `WIP`, `[WIP]` or `WIP:`.
- Add the `PR: unreviewed` label when the PR does not have any reviews.
- Add the `PR: reviewed-changes-requested` label when the PR has reviewed and got `Change request` event.
- Add the `PR: review-approved` label when the PR has reviewed and got `Approve` event.


## Installation for GitHub Enterprise

Please follow the below steps to install for GitHub Enterprise :rocket::

1. Go to GitHub Enterprise URL. E.g. `fake.github-enterprise.com`
1. Go to `fake.github-enterprise.com/settings/apps/new`
1. Create a new app which has Permissions and Subscribe to events below:
    - Permissions
        - Pull request
            - Access: Read & Write
    - Subscribe to events
        - Pull request
        - Pull request review
1. Deploy the app to Glitch, Heroku or Now.
    - [Read more about how to deploy app](https://probot.github.io/docs/deployment/)

