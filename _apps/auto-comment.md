---
title: Auto-comment
description: Comments on new issues and pull requests based on your configuration.
slug: auto-comment
screenshots:
- https://avatars3.githubusercontent.com/in/14394?s=88&amp;v=4
authors:
- boyney123
repository: boyney123/auto-comment
host: https://auto-comment.now.sh
stars: 7
updated: 2019-02-18 11:52:06 UTC
installations: 62
organizations:
- adonisjs
- ethereum
- meetfranz
- mitchellkrogza
- hoodiearon
- cosmocode
- fvcproductions
- OrkoHunter
- tunnckocorehq
- servicemesher
---


## Usage

Using **auto-comment** is simple. Once you've installed it in your repository you will need to setup your `./github/auto-comment.yml` file and **auto-comment** will do the rest.

## Configuring for your project

There are a couple of configuration options that you will need to setup depending on what you want.

```yml
# Comment to a new issue.
issueOpened: >
  Thank your for raising a issue. We will try and get back to you as soon as possible.

  Please make sure you have given us as much context as possible.

pullRequestOpened: >
  Thank your for raising your pull request.

  Please make sure you have followed our contributing guidelines. We will review it as soon as possible
```

### Available options

| Name              | Type     | Description                                                  | Example of Usage                                                                                                                                       |
| ----------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| issueOpened       | `string` | This will be the message when new issues are created.        | Auto comments on new issues are a great way to give feedback to users or a way of telling users to make sure they provide as much context as possible. |
| pullRequestOpened | `string` | This will be the message when new pull requests are created. | Thank people for creating pull requests, give them links to your contributing guideline.                                                               |
