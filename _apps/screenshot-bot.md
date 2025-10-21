---
title: Argus Screenshot bot
description: A bot that monitors test workflows and posts visual diffs
  (screenshot comparisons) as comments on pull requests.
slug: screenshot-report-bot
screenshots:
  - https://raw.githubusercontent.com/taiga-family/argus/refs/heads/main/.demo/error-report.png
  - https://raw.githubusercontent.com/taiga-family/argus/refs/heads/main/.demo/loading.png
  - https://raw.githubusercontent.com/taiga-family/argus/refs/heads/main/.demo/pr-closed.png
authors:
  - nsbarsukov
repository: taiga-family/argus
host: https://screenshot-report-bot.vercel.app
stars: 19
updated: 2025-10-20 07:26:28 UTC
---

**Argus screenshot bot** is a GitHub App built with [Probot](https://github.com/probot/probot) that helps teams catch unintended visual changes by posting screenshot comparisons as comments on pull requests.
It monitors test workflows that generate screenshot artifacts, downloads visual diffs, and attaches them in a comment on the pull request.

> **Why "Argus"?** Argus is a many-eyed "all-seeing" giant in Greek mythology.
> This character is known for having generated the saying "the eyes of Argus"
> (being subject to strict scrutiny in one's actions to an invasive, distressing degree).
> [(c) Wikipedia](https://en.wikipedia.org/wiki/Argus_Panoptes)

Read more about this tool in the article:<br/>
[«Bots should work, developers should think»: Writing Github App with Node.js](https://medium.com/its-tinkoff/bots-should-work-developers-should-think-writing-github-app-with-node-js-2e8eb049d7e4).

## Setup :rocket:

Deployment of the bot using GitHub actions is the preferred approach.<br />
Deployment as a GitHub app is supported as well.

### As GitHub Action

```yml
# .github/workflows/screenshot-bot.yml
on:
    workflow_run:
        workflows: [E2E Results] # <-- Choose any workflows to be watched by bot
        types: [requested, completed]
        branches-ignore:
            - 'main'
            - 'release/**'
    pull_request:
        types: [closed]

jobs:
    awake-screenshot-bot:
        runs-on: ubuntu-latest
        permissions:
            actions: read
            contents: write
            pull-requests: write
        steps:
            - uses: taiga-family/argus@main
              env:
                  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### As GitHub App

You can deploy your own Github App using this code and recipes from the [Probot documentation](https://probot.github.io/docs/deployment)
or use an already hosted **[screenshot‑report‑bot](https://github.com/apps/screenshot-report-bot/installations/new)**

## Bot configurations :gear:

The bot has configurable parameters which can be unique for every GitHub repository.<br>
Every parameter is optional, and you can skip this section if the default configuration satisfies your needs.

In order to pass custom parameters to the bot, you should create a `screenshot-bot.config.yml` file inside the `.github` directory of your repository.

**Example of a `screenshot-bot.config.yml` file's contents** (you can paste it as it is) with **default values** for each param:

```yaml
# array of RegExp strings to match images inside artifacts (by their path or file name)
# which shows difference between two screenshot and which will be added to bot report comment
diff-paths: [
        # it is default Cypress folder name into which snapshot diffs are put
        '.*__diff_output__.*',
    ]

# array of attributes (key="value") for html-tag <img /> (screenshots)
# e.g. ['width="200px"', 'height="300px"']
img-attrs: []

# Text which is placed at the beginning of section "Failed tests"
failed-report-description: ''

# Regular expression string to match images inside artifacts (by their path or file name)
# which are created by new screenshot tests.
new-screenshot-mark: '.*==new==.*'

##################################
# Not relevant for GitHub Action #
##################################

# array of regular expression strings to match workflow names
# which should be watched by bot
workflows: [
        # all workflows with sub-string "screenshot" in their names
        '.*screenshot.*',
    ]

# array of RegExp strings to match branch names which should be skipped by bot
branches-ignore: []
```

## What can the bot do? :bulb:

-  Posts an initial comment in the PR and updates it as workflows are run.
   No endless stream of comments from the bot!
-   Sets loading state in a comment when the PR is opened or when new commits are pushed.
    ![loading-demo](https://raw.githubusercontent.com/taiga-family/argus/refs/heads/main/.demo/loading.png)
-   Downloads artifacts from workflows with tests, finds screenshots diffs images, and pins them to the tests failure report.
    ![error-report-demo](https://raw.githubusercontent.com/taiga-family/argus/refs/heads/main/.demo/error-report.png)
-   Removes all uploaded images (for the current PR) after closing the pull request.
    ![closed-pr-demo](https://raw.githubusercontent.com/taiga-family/argus/refs/heads/main/.demo/pr-closed.png)

## About Permissions :closed_lock_with_key:

If you use the bot as a GitHub Action, it is required to provide the `permissions` property in your `yml` file.<br>
If you use the bot as a GitHub App, it will ask for some permissions at the beginning of the bot's installation.<br>
All requested permissions are necessary, and we do not ask for more permissions than needed.

#### Permissions

Bot requires the following repository's **permissions**:

-   `actions: read` - to get the list of workflow run artifacts and download those artifacts.
-   `contents: write` - to create a new branch for the storage of screenshot diffs images
    and to have the ability to upload/delete these screenshot diffs images.
-   `metadata: read` - mandatory for Github App.
-   `pull_requests: write` - to create/edit PR's comment with bot's tests reports.

#### Events

The bot listens to the following repository **events**:

-   `pull_request` — bot listens to the `pull request.closed` event in order to delete all saved screenshots for the closed PR.
-   `workflow_run` — bot listens to the `workflow_run.completed` event in order to download artifacts and send tests report as PR comment.
