---
title: First Timers
description: Create starter issues to help onboard new open source contributors
slug: first-timers
screenshots:
- https://raw.githubusercontent.com/hoodiehq/first-timers-bot/master/assets/Issue-Done.png
authors:
- agonzalez0515
- Techforchange
stars: 123
repository: hoodiehq/first-timers-bot
updated: 2018-03-29 00:18:05 UTC
host: https://first-timers-bot.now.sh
installations: 221
organizations:
- jekyll
- videojs
- processing
- Moya
- hoodiehq
- semantic-release
- skywinder
- mikaelbr
- terkelg
- gr2m
---

### Configuration

The first-timers app works without configuration. If you want to change the default settings, create a .github/first-timers.yml file with the content below and then you can adjust the options to your preference.  When both the template & the repository is set, then the template is loaded from the _configured_ repository at the configured template path.

```yaml
# You can change the labels to suit your needs if "first-timers-only" is not what you are looking for.
# These are some examples.
labels:
  - first-timers-only

#If you would like to add your own template for the issue, add an .md file to your .github folder
template: .github/first-timers-issue-template.md

# You can create the issue in a different repo than where the problem is. Just make sure you installed the bot on the configured repository.
# The issue will link back to the original repository where the contribution will be made.
repository: repo-name
```
