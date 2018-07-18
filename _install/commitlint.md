---
title: commitlint
description: Lints all commits of new or edited pull requests and sets an appropriate
  status check.
slug: commitlint
screenshots:
- https://github.com/ahmed-taj/commitlint-bot/raw/master/docs/status.png
authors:
- ahmed-taj
repository: ahmed-taj/commitlint-bot
host: https://commitlint.herokuapp.com
stars: 55
updated: 2018-02-28 18:12:46 UTC
installations: 31
organizations:
- caarlos0
- ajsb85
- algolia
- flyve-mdm
- ahmed-taj
- SuriyaaKudoIsc
- upfrontIO
- CharlyJazz
- glpi-project
- theo4u
---

<p align="center">
  <img src="https://avatars0.githubusercontent.com/in/6357" width="256" alt="commitlint logo" />
</p>

## Usage

Problem details will be reported as a comment like this:

![status-comment-screenshot][]

For best results, enable branch protection (in the repository's settings) and require the `commitlint` status check to pass before merging:

![branch-protection-screenshot][]

[apps]: https://github.com/apps/commitlint
[status-check-screenshot]: https://github.com/ahmed-taj/commitlint-bot/raw/master/docs/status.png
[status-comment-screenshot]: https://github.com/ahmed-taj/commitlint-bot/raw/master/docs/comment.png
[branch-protection-screenshot]: https://github.com/ahmed-taj/commitlint-bot/raw/master/docs/setting.png

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).
