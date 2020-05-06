---
title: Read The Docs Helper
description: Assists reviewing using Read The Docs (RTD)
slug: rtd-helper
screenshots:
- https://raw.githubusercontent.com/KengoTODA/rtd-bot/master/screenshot.png
authors:
- KengoTODA
repository: KengoTODA/rtd-bot
host: https://rtd-bot.herokuapp.com
stars: 8
updated: 2020-05-06 00:06:07 UTC
installations: 11
organizations:
- pytest-dev
- pypa
- spotbugs
- cherrypy
- geosolutions-it
- aio-libs
- sanitizers
- CivicActions
- patron-it
---

Get URL of documents when review changes in docs directory.

Work with Read The Docs, then you'll find that PR for documentation needs additional steps like:

* running RTD build for your branch manually, to use its result as staging site [like this](https://github.com/spotbugs/spotbugs/pull/697#issue-201455071), or
* sharing screenshot to share the updated document [like this](https://github.com/spotbugs/spotbugs/pull/718#issue-205904835).

This bot automates the first approach; activate RTD build automatically when you made PR that updates `docs/` directory.
