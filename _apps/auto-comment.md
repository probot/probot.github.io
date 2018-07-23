---
title: Auto-comment
description:  Comments on new issues and pull requests based on your configuration.
slug: auto-comment
screenshots:
- https://avatars3.githubusercontent.com/in/14394?s=88&amp;v=4
authors: [ boyney123 ]
repository: boyney123/auto-comment
host: https://auto-comment.now.sh
---

<p align="center">
  <img src="https://avatars3.githubusercontent.com/in/14394?s=88&amp;v=4" width="64">
  <h3 align="center"><a href="https://github.com/marketplace/auto-comment">auto-comment</a></h3>
  <p align="center">A GitHub App built with <a href="https://github.com/probot/probot">Probot</a> that comments on new issues and pull requests based on your configuration.<p>
  <p align="center"><a href="https://travis-ci.org/boyney123/auto-comment"><img src="https://img.shields.io/travis/boyney123/auto-comment/master.svg" alt="Build Status"></a>
    <a href="https://codecov.io/gh/boyney123/auto-comment/"><img src="https://img.shields.io/codecov/c/github/boyney123/auto-comment.svg" alt="Codecov"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT"></a>
 
  </p>
</p>

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
