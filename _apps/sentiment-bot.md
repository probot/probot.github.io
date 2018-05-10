---
title: Sentiment Bot
description: Replies to toxic comments with a maintainer designated reply and a link
  to the repo's code of conduct
slug: sentiment-bot
screenshots:
- https://user-images.githubusercontent.com/13410355/29323857-fcfe4b4e-8196-11e7-9a08-6184fd46edbb.png
stars: 28
authors:
- hiimbex
repository: behaviorbot/sentiment-bot
updated: 2018-04-13 17:43:17 UTC
host: https://probot-sentiment-bot.herokuapp.com
installations: 37
organizations:
- nlohmann
- git-for-windows
- probot
- MvvmCross
- modo-studio
- xcodeswift
- jahirfiquitiva
- pliablepixels
- behaviorbot
- u3u
---

Replies to toxic comments with a maintainer designated reply and a link to the repo's code of conduct. It does so by taking data from a `.github/config.yml`.

<img width="801" alt="screen shot 2017-08-15 at 8 51 38 am" src="https://user-images.githubusercontent.com/13410355/29323857-fcfe4b4e-8196-11e7-9a08-6184fd46edbb.png">
You can tell from this example just how toxic I am 😜

## Usage

1. Install the bot on the intended repositories. The app requires the following **Permissions and Events**:
- Issues: **Read & Write**
  - **Issue Comment** events
2. Add a `.github/config.yml` file that contains the following:

```yml
# Configuration for sentiment-bot - https://github.com/behaviorbot/sentiment-bot

# *Required* toxicity threshold between 0 and .99 with the higher numbers being the most toxic
# Anything higher than this threshold will be marked as toxic and commented on
sentimentBotToxicityThreshold: .7

# *Required* Comment to reply with
sentimentBotReplyComment: >
  Please be sure to review the code of conduct and be respectful of other users. cc/ @hiimbex

# Note: the bot will only work if your repository has a Code of Conduct
```
3. Be sure to check out the [Perspective API](https://www.perspectiveapi.com/) before choosing your toxicity threshold to get a feel for what kind of comments would register at what toxicity threshold.
