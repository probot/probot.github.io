---
title: Triage New Issues
description: Adds `triage` label to newly-created issues and then removes it when
  other label(s) are added
slug: triage-new-issues
screenshots:
- https://i.imgur.com/bdbDaPz.png
- https://i.imgur.com/HMndYuP.png
- https://i.imgur.com/fOp0Est.png
- https://i.imgur.com/ldrHDzZ.png
authors:
- tunnckoCore
- olstenlarck
repository: tunnckoCore/triage-new-issues
host: https://triage-new-issues.now.sh
stars: 7
updated: 2018-05-08 11:41:00 UTC
installations: 39
organizations:
- CachetHQ
- Semantic-Org
- Laravel-Backpack
- Robdel12
- xcodeswift
- thefrontside
- jahirfiquitiva
- tunnckoCore
- eXist-db
- red-eclipse
---


## Use programmatically

Install it using [**yarn**](https://yarnpkg.com) **v1** or above / [**npm**](https://www.npmjs.com) **v5** or above.

```
$ yarn add triage-new-issues
```

## Install it to your profile

Go to https://github.com/apps/triage-new-issues and click the green "install" button.

Very much appreciated the work of **Gyandeep Singh ([@gyandeeps](https://github.com/gyandeeps))** on
the plugin for the [ESLint's GitHub Bot](https://github.com/eslint/eslint-github-bot/tree/4dd943a51b415b0b2053b4a4ae75a4e9244fcb09/src/plugins/triage)!

In addition to it, to safe UI clicking and time, I just added ability to auto-remove `triage` label when another label is added.

## Deploying

We hosting it on https://triage-new-issues.now.sh/, but if you want to host it yourself

1. Decide where to host
2. Check out [Probot Docs on deploying](https://probot.github.io/docs/development/)
3. Make sure your deployment service run the `start` script

**ProTip:** If you choose to host on [Now](https://www.now.sh), check `now secrets help`

**Note:** As of 15 November 2017, deploying on Now needs this workaround - [probot/probot#318](https://github.com/probot/probot/issues/318#issuecomment-343010573)

## Screenshots

![](https://i.imgur.com/bdbDaPz.png)
![](https://i.imgur.com/HMndYuP.png)
![](https://i.imgur.com/fOp0Est.png)
![](https://i.imgur.com/ldrHDzZ.png)
