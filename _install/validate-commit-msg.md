---
title: validate-commit-msg
description: Runs validate-commit-msg over all commits of new or edited pull requests
  and sets an appropriate a status check.
slug: validate-commit-msg
screenshots:
- https://github.com/tlvince/validate-commit-msg-bot/raw/master/docs/status-check-screenshot.png
authors:
- tlvince
repository: tlvince/validate-commit-msg-bot
stars: 6
updated: 2018-02-14 10:49:59 UTC
host: https://validate-commit-msg-bot.now.sh
installations: 26
organizations:
- chaijs
- SpoonX
- axetroy
- angular-pouchdb
- devcenter-square
- christophehurpeau
- tlvince
- nikolay
- luanmuniz
- enieber
redirect_from: "/apps/validate-commit-msg-bot/"
---

## Usage

1. Browse to [GitHub Apps - validate commit msg][apps]
2. Accept the permissions
3. Allow access to repositories

On the next pull request, a status check from `validate-commit-msg-bot` will appear:

![status-check-screenshot][]

For best results, enable branch protection (in the repository's settings) and require the `validate-commit-msg` status check to pass before merging:

![branch-protection-screenshot][]

[apps]: https://github.com/apps/validate-commit-msg
[status-check-screenshot]: https://raw.githubusercontent.com/tlvince/validate-commit-msg-bot/master/docs/status-check-screenshot.png
[branch-protection-screenshot]: https://raw.githubusercontent.com/tlvince/validate-commit-msg-bot/master/docs/branch-protection-screenshot.png

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).
