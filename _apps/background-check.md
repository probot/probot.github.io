---
title: Background Check
description: Notifies maintainers when new contributors who have been toxic in the
  past join the project
slug: background-check
screenshots:
- https://raw.githubusercontent.com/probot/background-check/master/assets/demonstration.png
authors:
- itaditya
repository: probot/background-check
host: https://probot-background-check.herokuapp.com
stars: 9
updated: 2018-08-11 14:06:36 UTC
installations: 50
organizations:
- kartik-v
- probot
- theme-next
- debugger22
- publiclab
- cherrypy
- fvcproductions
- campus-experts
- techqueria
- spellcheck-ko
---

When a new contributor comments on your repository, sentiment analysis is run on their recent public comments. If 5 or more comments stand out as toxic, then an issue is opened for this user in `probot-background-check/{your-github-username}-discussions` private repository so that you and other maintainers can review these toxic comments and discuss whether or not you all want to allow this hostile user to participate in the community.

## Setup the app

* Install the app from [here](https://github.com/apps/background-check) in your repos.
* You'll receive an invitation to join a repo in `probot-background-check` org. Accept it.

Simple as that. No config needed.
