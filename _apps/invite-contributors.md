---
title: invite-contributors
description: Invite authors of merged pull requests to your organization
slug: invite-contributors
screenshots:
- https://i.imgur.com/IoTF1aD.png
authors:
- erickzhao
repository: erickzhao/invite-contributors
stars: 24
updated: 2018-05-05 14:10:11 UTC
host: https://vast-stream-78160.herokuapp.com
installations: 40
organizations:
- nteract
- nextcloud
- stylelint
- gridsome
- theme-next
- Laravel-Backpack
- tuist
- imolorhe
- publiclab
- unoplatform
---

# invite-contributors

[![Build Status](https://api.travis-ci.org/erickzhao/invite-contributors.svg?branch=master)](https://travis-ci.org/erickzhao/invite-contributors) [![codecov](https://codecov.io/gh/erickzhao/invite-contributors/branch/master/graph/badge.svg)](https://codecov.io/gh/erickzhao/invite-contributors)

**invite-contributors** is a GitHub App built with [probot](https://github.com/probot/probot) that automatically invites new contributors to your repository's organization once they get a Pull Request merged.

## Usage

1. Configure the GitHub App.
2. invite-contributors will automatically invite new users who have their pull requests merged to your organization.
3. More options are available if you add a `.github/invite-contributors.yml` file into your repository such as below.

```
# If true, this will add new contributors as outside collaborators
# to the repo their PR was merged in. Team name is ignored if this
# flag is set to true.
isOutside: false

# Specify team name to add new contributors to a specific team
# within your organization.
# Use team name or team-name-slug
team: MY TEAM NAME
```

## Contributing

Anyone can contribute with [issues](https://github.com/erickzhao/invite-contributors/issues) and [PRs](https://github.com/erickzhao/invite-contributors/pulls). If you're submitting a pull request, always create a new branch to work your changes, and try squashing commits down if possible. Always test any new code and make sure `npm test` passes and code coverage is adequate before opening a PR.
