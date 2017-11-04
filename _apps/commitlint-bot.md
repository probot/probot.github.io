---
title: commitlint-bot
description: A GitHub App that lints all commits of new or edited pull requests and
  sets an appropriate status check.
slug: commitlint-bot
screenshots:
- https://github.com/ahmed-taj/commitlint-bot/blob/master/docs/status.png
authors:
- ahmed-taj
repository: ahmed-taj/commitlint-bot
host: https://commitlint.now.sh
stars: 10
updated: 2017-11-02 17:52:44 UTC
installations: 1
organizations:
- ahmed-taj
---

<p align="center">
  <img src="https://github.com/ahmed-taj/commitlint-bot/blob/master/docs/robot.svg" width="256" alt="commitlint-bot logo" />
</p>

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
