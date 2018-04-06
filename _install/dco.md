---
title: Developer Certificate of Origin
description: Enforce the DCO on Pull Requests
slug: dco
screenshots:
- https://cloud.githubusercontent.com/assets/173/24482273/a35dc23e-14b5-11e7-9371-fd241873e2c3.png
stars: 46
authors:
- bkeepers
repository: probot/dco
updated: 2018-04-05 02:39:59 UTC
host: https://probot-dco.herokuapp.com
installations: 162
organizations:
- hyperledger
- fluent
- gradle
- pi-hole
- vitessio
- openebs
- jaegertracing
- linkerd
- envoyproxy
- git-for-windows
---

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub Integration:

- Commit statuses: **Read & Write**
- Pull requests: **Read-only**
  - [x] Check the box for **Pull request** events
- Repository contents: **Read-only**
  - [x] Check the box for **Push** events

# Required Status Checks

Enable [required status checks](https://help.github.com/articles/about-required-status-checks/) if you want to enforce the DCO on all commits (you will need to open at least one Pull Request after configuring the integration before you can set this up).

![](https://cloud.githubusercontent.com/assets/173/24323001/7013b7c0-113c-11e7-8ef6-8f6cb7539f33.png)

![](https://cloud.githubusercontent.com/assets/173/24327690/5da657e4-119d-11e7-9f84-97d468db7b58.png)

Now pushes to `master` will not be allowed, and all pull requests must pass the DCO checks before being merged.
