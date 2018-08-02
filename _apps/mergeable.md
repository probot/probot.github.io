---
title: Mergeable
description: Prevent merging of Pull Requests based on configurations.
slug: mergeable
screenshots:
- https://raw.githubusercontent.com/jusx/mergeable/5d9c9cab357b12b84af62044ac46648d9fca84c4/screenshot.gif
authors:
- jusx
repository: jusx/mergeable
host: https://mergeable-bot.herokuapp.com
stars: 50
updated: 2018-08-01 05:35:30 UTC
installations: 13
organizations:
- grpc
- rundeck
- jusx
- grumpycoders
- testcontainers
---

A GitHub App that prevents merging of Pull Requests based on [configurations](https://github.com/jusx/mergeable#configuration). Make your Pull Requests mergeable only when:

- Certain terms are not in the **title** or **label**.

- The **milestone** on the pull request matches with what is configured.

- There are at least `n` number of **approved reviews**, where `n` is configurable.
