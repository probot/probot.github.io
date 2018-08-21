---
title: Changelog Reminder
description: A GitHub app that reminds to update CHANGELOG.md.
slug: changelog-reminder
screenshots:
- https://raw.githubusercontent.com/pverkhovskyi/changelog-reminder/master/docs/changelog-reminder.png
authors:
- pverkhovskyi
repository: pverkhovskyi/changelog-reminder
host: https://changelog-reminder.herokuapp.com/
---

Changelog Reminder is a useful app for projects which maintain CHANGELOG.md. It comments on newly opened  pull requests when changes were not reflected in the changelog.

## Usage

1. Install the app on the intended repositories. The app has **no access to your code**. It requires following permissions:
  - **Read** access to metadata and single file `.github/config.yml`
  - **Read** and **write** access to pull requests
2. Add a `.github/config.yml` file that contains the contents you would like to reply within an `changelogReminderMessage`.

```yml
# Message to be posted when PRs don't update changelog
changelogReminderMessage: >
    Thanks for opening this pull request! All notable changes to this project should be documented in CHANGELOG.md. Please update it based on your changes.

```
