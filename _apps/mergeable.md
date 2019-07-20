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
stars: 178
updated: 2019-06-30 13:46:09 UTC
installations: 127
organizations:
- protocolbuffers
- grpc
- phpstan
- apache
- banzaicloud
- theme-next
- fossasia
- rundeck
- Radarr
- audiohacked
---

A GitHub App that prevents merging of Pull Requests based on [configurations](https://github.com/jusx/mergeable#configuration). Make your Pull Requests mergeable only when:

- Certain terms are not in the **title** or **label**.

- The **milestone** on the pull request matches with what is configured.

- There are at least `n` number of **approved reviews**, where `n` is configurable.
