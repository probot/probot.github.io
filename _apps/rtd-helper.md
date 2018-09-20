---
# A human-friendly name of your listing
title: Read The Docs
# A short description of what your app does
description: Assists reviewing using Read The Docs
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: rtd-helper
# Include a few screenshots that show your app in action
screenshots:
- https://raw.githubusercontent.com/KengoTODA/rtd-bot/master/screenshot.png
# The GitHub usernames of anyone who authored the app
authors:
- KengoTODA
# The repository where the code is located
repository: KengoTODA/rtd-bot
# The address where this app is deployed
host: https://rtd-bot.herokuapp.com
---

Get URL of documents when review changes in docs directory.

Work with Read The Docs, then you'll find that PR for documentation needs additional steps like:

* running RTD build for your branch manually, to use its result as staging site [like this](https://github.com/spotbugs/spotbugs/pull/697#issue-201455071), or
* sharing screenshot to share the updated document [like this](https://github.com/spotbugs/spotbugs/pull/718#issue-205904835).

This bot automates the first approach; activate RTD build automatically when you made PR that updates `docs/` directory.
