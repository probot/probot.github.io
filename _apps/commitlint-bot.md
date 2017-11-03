---
# A human-friendly name of your listing
title: commitlint-bot
# A short description of what your app does
description: A GitHub App that lints all commits of new or edited pull requests and sets an appropriate status check.
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: commitlint-bot
# Include a few screenshots that show your app in action
screenshots:
- https://github.com/ahmed-taj/commitlint-bot/blob/master/docs/status.png
# The GitHub usernames of anyone who authored the app
authors: [ ahmed-taj ]
# The repository where the code is located
repository: ahmed-taj/commitlint-bot
# The address where this app is deployed
host: https://commitlint.now.sh/
---

# commitlint-bot

[![Travis](https://img.shields.io/travis/ahmed-taj/commitlint-bot.svg)](https://travis-ci.org/ahmed-taj/commitlint-bot)
[![npm](https://img.shields.io/npm/v/commitlint-bot.svg)](https://www.npmjs.com/package/commitlint-bot)


<p align="center">
  <img src="https://github.com/ahmed-taj/commitlint-bot/blob/master/docs/robot.svg" width="256" alt="commitlint-bot logo" />
</p>

> Built with [probot](https://github.com/probot/probot) framework

A GitHub App that runs [commitlint](https://github.com/marionebl/commitlint) over all commits of new or edited pull requests
and sets an appropriate status check.

## Usage

1. Browse to [GitHub Apps - commitlint-bot][apps]
2. Accept the permissions
3. Allow access to repositories

On the next pull request, a status check from `commitlint-bot` will appear:

![status-check-screenshot][]

Problem details will be reported as a comment like this:

![status-comment-screenshot][]

For best results, enable branch protection (in the repository's settings) and require the `commitlint-bot` status check to pass before merging:

![branch-protection-screenshot][]

[apps]: https://github.com/apps/commitlint-bot
[status-check-screenshot]: https://github.com/ahmed-taj/commitlint-bot/blob/master/docs/status.png
[status-comment-screenshot]: https://github.com/ahmed-taj/commitlint-bot/blob/master/docs/comment.png
[branch-protection-screenshot]: https://github.com/ahmed-taj/commitlint-bot/blob/master/docs/setting.png

## Credits

Robot designed by [Freepik](https://www.freepik.com/free-vector/fun-pack-of-robots-avatars_1258314.htm).

Inspired by the awesome work of Tom Vincent in their [validate-commit-msg-bot](https://github.com/tlvince/validate-commit-msg-bot) package.

## Like it?

Give it a star(:star:) :point_up_2:

## License

MIT © [Ahmed T. Ali](https://github.com/ahmed-taj)
