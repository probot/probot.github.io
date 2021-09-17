---
title: Rezensent
description: The rezensent (german for reviewer) is a github app which help
  managing big pull requests in a repository divided by code ownership rules
slug: rezensent
screenshots:
  - https://user-images.githubusercontent.com/327445/114275835-5e81d800-9a24-11eb-8d59-8f1233986750.png
authors:
  - KnisterPeter
repository: KnisterPeter/rezensent
host: https://rezensent.herokuapp.com/
stars: 3
updated: 2021-09-16 00:57:14 UTC
---

# rezensent

The rezensent (german for reviewer) is a github app which help managing big pull requests in a
repository divided by code ownership rules.

## Idea

Split a pull request into several smaller ones along the lines of ownership.
Then maintain the spitted pull requests using the app.

It is loosely based on the idea of [googles rosie](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext)

> With Rosie, developers create a large patch, either through a find-and-replace
> operation across the entire repository or through more complex refactoring
> tools. Rosie then takes care of splitting the large patch into smaller
> patches, testing them independently, sending them out for code review, and
> committing them automatically once they pass tests and a code review. Rosie
> splits patches along project directory lines, relying on the code-ownership
> hierarchy described earlier to send patches to the appropriate reviewers

## How it works

### Terminology

| term                 | explanation                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------- |
| managed pull request | A pull request labeled with the 'manage label'                                                                |
| team pull request    | A pull request created by the app per team                                                                    |
| codeowners           | [CODEOWNERS](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) |

### Steps

- Whenever a pull request is labeled with the configured 'manage label', the app
  will create a pull request with just the changes for each team.

- Then each team can review their changes separated from the other teams and
  when the pull request is approved it can be merged.

- As soon as the app detects a merge, the managed pull request is updated to the
  HEAD of it's base branch. And all remaining team pull requests are
  update/recreated.

- When there are no changes left, the managed pull request is closed as all
  changes are integrated into it's base branch.

### Process description

<p align="center">
  <img src="https://raw.githubusercontent.com/KnisterPeter/rezensent/main/docs/process.drawio.svg" alt="process" />
</p>

## Usage

### Public App

The app is publicly available for free at https://github.com/apps/rezensent.

You can just add it to your github repository and complete the onboarding process.

### Docker

The app could be hosted using the [provided docker image](https://hub.docker.com/r/knisterpeter/rezensent).

The container need to be configured by the following environment variables:

| name           | description                                | required | default |
| -------------- | ------------------------------------------ | -------- | ------- |
| APP_ID         | The GitHub app id                          | yes      |         |
| PRIVATE_KEY    | The private key obtained from github       | yes      |         |
| WEBHOOK_SECRET | The webhook secret set during app creation | yes      |         |
| PORT           | The port of the app inside the container   | no       | 3000    |
