---
# A human-friendly name of your listing
title: Mergeable
# A short description of what your app does
description: A GitHub App that prevents merging of pull requests based on [configurations](https://github.com/jusx/mergeable#configuration).
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: mergeable
# Include a few screenshots that show your app in action
screenshots:
- https://raw.githubusercontent.com/jusx/mergeable/5d9c9cab357b12b84af62044ac46648d9fca84c4/screenshot.gif
# The GitHub usernames of anyone who authored the app
authors: [ jusx ]
# The repository where the code is located
repository: jusx/mergeable
# The address where this app is deployed
host: http://mergeable-bot.herokuapp.com/
---

A GitHub App that prevents merging of pull requests based on [configurations](https://github.com/jusx/mergeable#configuration). Make your pull requests mergeable only when:

- Certain terms are not in the **title** or **label**.

- The **milestone** on the pull request matches with what is configured.

- There are at least `n` number of **approved reviews**, where `n` is configurable.

