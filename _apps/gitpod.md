---
title: Gitpod
description: Open issues and pull requests in Gitpod
slug: gitpod-io
screenshots:
- https://user-images.githubusercontent.com/3082655/45426649-1a2bd100-b69d-11e8-9790-91cd6850bc63.png
authors:
- gitpod-io
repository: gitpod-io/gitpod-bot
host: https://gitpod-bot.now.sh
stars: 10
updated: 2019-02-12 20:00:54 UTC
installations: 16
organizations:
- caouecs
- TypeFox
- sr229
- ProjectAliceDev
- gitpod-io
- hemanth22
- JanitorTechnology
- Sayo-nika
- abenchi
---

Open issues and pull requests in [Gitpod](http://www.gitpod.io).

## How it works

Gitpod is a one-click online IDE for GitHub. It can be started on any GitHub URL by prefixing it with `gitpod.io#`.
Gitpod Bot generates such links for issues and pull requests and post them as comments.

## Installation

After installing the app, create `.github/gitpod.yml` in the default branch to enable it:

```yml
pulls:
# Enable for pull requests
  perform: true
# Customize a comment to post on a pull request. Comment out to use the default
#  comment:

issues:
# enable for issues
  perform: true
# issues with these labels will be considered. Set to `[]` to disable for issues
  labels:
    - help wanted
    - good first issue
# Customize a comment to post on an issue. Comment out to use the default
#  comment:
```
