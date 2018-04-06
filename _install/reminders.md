---
title: Reminders
description: Set reminders on Issues and Pull Requests
slug: reminders
screenshots:
- https://user-images.githubusercontent.com/173/30673997-505a993a-9e77-11e7-8f0f-d5a606816e8e.png
authors:
- jbjonesjr
- bkeepers
repository: probot/reminders
stars: 23
updated: 2018-04-05 15:54:14 UTC
host: https://probot-reminders.herokuapp.com
installations: 148
organizations:
- eggjs
- chaijs
- git-for-windows
- devtools-html
- thibmaek
- probot
- goreleaser
- carambalabs
- Laravel-Backpack
- chrisbra
---

## Usage
1. **[Configure the GitHub App](https://github.com/apps/reminders)**
2. Start using the `/reminders` command on the repository.
3. Optionally, add a `.github/config.yml` to customize the app:

```yml
reminders:  
  # Label applied to issues with pending reminders
  label: reminder
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).
