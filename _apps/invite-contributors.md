---
title: invite-contributors
description: Automatically invite authors of merged pull requests to your organization
slug: invite-contributors
screenshots:
- https://i.imgur.com/USwS3CF.png
authors:
- erickzhao
repository: erickzhao/invite-contributors
stars: 5
updated: 2017-10-21 22:18:19 UTC
---

# invite-contributors

[![Build Status](https://travis-ci.org/erickzhao/badge.svg?branch=master)](https://travis-ci.org/erickzhao/badge)

**invite-contributors** is a GitHub App built with [probot](https://github.com/probot/probot) that automatically invites new contributors to your repository's organization once they get a Pull Request merged, giving them a *badge* to wear on their profile.

## Usage

1. Configure the GitHub App.
2. invite-contributors will automatically invite new users who have their pull requests merged to your organization.
3. If you want to add new contributors to a specific team in your organization, add a `.github/badge.yml` file into your repository such as below. Note that entering the team name and team slug are both valid formats.
```
# team name
MY TEAM NAME
```

## Contributing

Anyone can contribute with [issues](https://github.com/erickzhao/invite-contributors/issues) and [PRs](https://github.com/erickzhao/invite-contributors/pulls). If you're submitting a pull request, always create a new branch to work your changes, and try squashing commits down if possible. Always test any new code and make sure `npm test` passes before opening a PR.
