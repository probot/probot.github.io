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
host: https://probot-commitlint.now.sh
stars: 61
updated: 2018-04-28 00:10:53 UTC
installations: 39
organizations:
- caarlos0
- TECLIB
- ajsb85
- algolia
- flyve-mdm
- ahmed-taj
- upfrontIO
- blackxored
- CharlyJazz
- glpi-project
---

<p align="center">
  <img src="https://avatars0.githubusercontent.com/in/6357" width="256" alt="commitlint logo" />
</p>

A GitHub App that runs [commitlint](https://github.com/marionebl/commitlint) over all commits of new or edited pull requests
and sets an appropriate status check.

## Usage

1.  Browse to [GitHub Apps - commitlint][apps]
2.  Accept the permissions
3.  Allow access to repositories

On the next pull request, a status check from `commitlint` will appear:

![status-check-screenshot][]

Problem details will be reported as a comment like this:

![status-comment-screenshot][]

For best results, enable branch protection (in the repository's settings) and require the `commitlint` status check to pass before merging:

![branch-protection-screenshot][]

[apps]: https://github.com/apps/commitlint
[status-check-screenshot]: https://github.com/ahmed-taj/commitlint-bot/raw/master/docs/status.png
[status-comment-screenshot]: https://github.com/ahmed-taj/commitlint-bot/raw/master/docs/comment.png
[branch-protection-screenshot]: https://github.com/ahmed-taj/commitlint-bot/raw/master/docs/setting.png

## Credits

Robot designed by [Freepik](https://www.freepik.com/free-vector/fun-pack-of-robots-avatars_1258314.htm).

Inspired by the awesome work of Tom Vincent in their [validate-commit-msg-bot](https://github.com/tlvince/validate-commit-msg-bot) package.

## Like it?

Give it a star(:star:) :point_up_2:

## License

MIT © [Ahmed T. Ali](https://github.com/ahmed-taj)
