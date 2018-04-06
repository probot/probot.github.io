---
title: Update Docs
description: Replies to newly opened pull requests that do no update a file in the
  `/docs` folder or the `README`
slug: update-docs
screenshots:
- https://user-images.githubusercontent.com/13410355/28179044-97207bee-67b5-11e7-80d0-0c8ede4a325f.png
stars: 10
authors:
- hiimbex
repository: behaviorbot/update-docs
updated: 2018-02-19 01:59:35 UTC
host: https://probot-update-docs.herokuapp.com
installations: 21
organizations:
- adonisjs
- xcodeswift
- KengoTODA
- behaviorbot
- ilovecode1
- u3u
- PHPMap
- varunsridharan
- marclop
- cms-gem-daq-project
---

Create a `.github/config.yml` file that contains the contents you would like to reply within an `updateDocsComment`. Optionally, you can also add an `updateDocsWhiteList` that includes terms, that if found in the title, the bot will not comment on.

```yml
# Configuration for update-docs - https://github.com/behaviorbot/update-docs

# Comment to be posted to on PRs that don't update documentation
updateDocsComment: >
  Thanks for opening this pull request! The maintainers of this repository would appreciate it if you would update some of our documentation based on your changes.

# Terms that if found in the title of a PR will prevent the bot from commenting on it
updateDocsWhiteList:
  - bug
  - chore
```

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).

This plugin requires these **Permissions & events** for the GitHub App:

- Pull requests - **Read & Write**
  - [x] Check the box for **Pull request** events
- Single File - **Read-only**
  - Path: `.github/config.yml`
