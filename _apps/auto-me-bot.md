---
title: Auto-Me-Bot
description: A Probot app that takes care of your GitHub repos for you
slug: auto-me-bot
screenshots:
  - https://raw.githubusercontent.com/TomerFi/auto-me-bot/main/docs/img/all-handlers-success.png
  - https://raw.githubusercontent.com/TomerFi/auto-me-bot/main/docs/img/all-handlers-fail.png
authors:
  - TomerFi
repository: TomerFi/auto-me-bot
host: https://3sdx7swi5bbpfw5w2jpjwuag3q0ezsva.lambda-url.us-east-1.on.aws/
stars: 11
updated: 2025-07-28 17:40:44 UTC
---

## Auto-Me-Bot

Managing a repository can be cumbersome :construction_worker: and tiresome :tired_face:.</br>
Let alone managing multiple repositories used by multiple contributors and bots :anguished:.

My name is [**auto-me-bot**][auto-me-bot-app]!</br>
I was created with [Probot][probot-pages] :robot: and I live my life as a _serverless function_ residing in [AWS Lambda][aws-lambda] :floppy_disk:.

I'm here to take some of the repo management load off your shoulders, just tell me what you want me to do...</br>
Place a file :memo: called **auto-me-bot.yml** in your **.github** folder :file_folder: in the repos you want me to help out with.

```yaml
# .github/auto-me-bot.yml
---
pr:
  conventionalCommits: # this means I'll enforce conventional commit messages in PRs.
  signedCommits: # this means I'll make sure all commits in PRs are signed with the 'Signed-off-by' trailer.
  tasksList: # this means I'll verify completion of tasks list in PRs.
```

> Place the file in your **.github** repository if you want me to take on multiple repos with one file :muscle:.

Check out the [documentation][auto-me-bot-docs] to see what else I can do :call_me_hand:.

Here are some pics of me working:

[![all-handlers-success]][auto-me-bot-docs]

[![all-handlers-fail]][auto-me-bot-docs]

<!-- REAL LINKS -->
[auto-me-bot-app]: https://github.com/apps/auto-me-bot
[auto-me-bot-docs]: https://auto-me-bot.tomfi.info/
[aws-lambda]: https://aws.amazon.com/lambda/
[probot-pages]: https://probot.github.io/
<!-- IMAGE LINKS -->
[all-handlers-fail]: https://raw.githubusercontent.com/TomerFi/auto-me-bot/main/docs/img/all-handlers-fail.png
[all-handlers-success]: https://raw.githubusercontent.com/TomerFi/auto-me-bot/main/docs/img/all-handlers-success.png
