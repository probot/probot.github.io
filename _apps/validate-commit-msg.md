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
stars: 3
updated: 2017-11-09 09:50:12 UTC
host: https://validate-commit-msg-bot.now.sh
installations: 18
organizations:
- chaijs
- angular-pouchdb
- axetroy
- christophehurpeau
- tlvince
- nikolay
- luanmuniz
- gregswindle
- Robophil
- lostintangent
redirect_from: "/apps/validate-commit-msg-bot/"
---

> validate-commit-msg aaS

Runs [validate-commit-msg][] over all commits of new or edited pull requests and sets an appropriate a [status check][].

Send a PR to [tlvince-sandbox-validate-commit-msg-bot][] to see it in action.

[status check]: https://developer.github.com/v3/repos/statuses/
[validate-commit-msg]: https://github.com/conventional-changelog/validate-commit-msg
[tlvince-sandbox-validate-commit-msg-bot]: https://github.com/tlvince/tlvince-sandbox-validate-commit-msg-bot

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

## Author

© 2017 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](https://tlvince.mit-license.org).

Robot emoji courtesy of [EmojiOne](https://www.emojione.com/emoji/1f916).
