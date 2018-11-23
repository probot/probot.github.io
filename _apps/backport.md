---
title: Backport
description: Backport a pull request by simply labeling it.
slug: backporting
screenshots:
- https://raw.githubusercontent.com/tibdex/backport/54db53f6709eef678778ddc57017a72616fdc39c/assets/demo.gif
authors:
- tibdex
repository: tibdex/backport
host: https://backport.now.sh
---

## Usage

1.  :electric_plug: Install the publicly hosted [Backport GitHub App](https://github.com/apps/backporting) on your repository.
2.  :speech_balloon: Let's say you want to backport a pull request on a branch named `production`. Then label it with `backport production`. (See [how to create labels](https://help.github.com/articles/creating-a-label/).)
3.  :sparkles: That's it! When the pull request gets merged, it will be backported to the `production` branch. If the pull request cannot be backported, a comment explaining why will automatically be posted.

### Demo

![Backport demo](https://raw.githubusercontent.com/tibdex/backport/54db53f6709eef678778ddc57017a72616fdc39c/assets/demo.gif)

This pull request has two commits and targets the `development` branch. After labeling it with `backport production` and merging it, Backport automatically creates a pull request on the `production` branch by cherry-picking these two commits.
