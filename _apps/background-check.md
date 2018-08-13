---
title: Background Check
description: Performs a "background check" to identify users who have been toxic in the past, and shares their toxic activity in the maintainer’s repo.
slug: background-check
screenshots:
- https://raw.githubusercontent.com/probot/background-check/master/assets/demonstration.png
authors: [ itaditya ]
repository: probot/background-check
host: https://probot-background-check.herokuapp.com
---

The bot listens to comments on repos in which the it is installed. When a new user comments, the bot fetches public comments of this user and run sentiment analyser on the comments. If 5 or more comments stand out as toxic, then the bot concludes that the user is of hostile background and an issue is opened for this user in `probot-background-check/{your-github-username}-discussions` private repo so that you and other maintainers can review these toxic comments and discuss whether or not you all want to allow this hostile user to participate in the community.

## Setup the app

* Install the app from [here](https://github.com/apps/background-check) in your repos.
* You'll receive an invitation to join a repo in `probot-background-check` org. Accept it.

Simple as that. No config needed.
