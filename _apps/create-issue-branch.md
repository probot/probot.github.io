---
title: Create Issue Branch
description: Automates the creation of issue branches.
slug: create-issue-branch
screenshots:
  - https://github.com/robvanderleek/create-issue-branch/blob/master/static/create-issue-branch.gif?raw=true
authors:
  - robvanderleek
repository: robvanderleek/create-issue-branch
host: https://create-issue-branch.herokuapp.com
stars: 164
updated: 2021-07-11 06:42:15 UTC
organizations:
  - openaphid
  - mrlesmithjr
  - pterm
  - zchee
  - lukaszflorczak
  - mallowigi
  - nielse63
  - kwebio
  - CoreProc
  - pojntfx
---
# Create Issue Branch

> A GitHub App/Action that automates the creation of issue branches (either automatically after assigning an issue or after commenting on an issue with a ChatOps command: `/create-issue-branch` or `/cib`).

Built in response to this feature reuest issue: 
https://github.com/isaacs/github/issues/1125

## What does this app do?

This app can support your development workflow in two ways (modes): auto and chatops.

In "auto" mode the typical development workflow is:

 1. An issue is created, for example: Issue 15: Fix nasty bug!

 *some time may pass*

 2. The issue is assigned
 3. When the issue is assigned this app will create a new issue branch
    (for the example issue this branch will be called `issue-15-Fix_nasty_bug`)

In "chatops" mode the typical development workflow is:

 1. An issue is created, for example: Issue 15: Fix nasty bug!

 *some time may pass*

 2. A developer that wants to work on this issue gives the ChatOps command `/cib` as a comment on the issue
 3. This app will create a new issue branch
    (for the example issue this branch will be called `issue-15-Fix_nasty_bug`)
    By default the app notifies creation is completed with a comment on the issue.

## Installation

There are two options to run this app as part of your development workflow:

1. [Install](https://github.com/apps/create-issue-branch) it as an *app* for your organization/account/repository
2. Run it as an *action* in your GitHub action YAML configuration

## Configuration

See the documentation in the GitHub repository: https://github.com/robvanderleek/create-issue-branch

## Feedback, suggestions and bug reports

Please create an issue: https://github.com/robvanderleek/create-issue-branch/issues
