---
title: Rubber Stamp
description: Approve pull requests.
slug: rubber-stamp
screenshots:
- https://raw.githubusercontent.com/carvincarl/rubber-stamp/master/docs/screenshot.png
authors: 
- carvincarl
repository: carvincarl/rubber-stamp
host: https://rubber-stamp.herokuapp.com/
---
# Rubber Stamp

> A GitHub App built with [Probot](https://github.com/probot/probot) that will approve pull requests.

Rubber Stamp can be used for the following use cases:

* If your pull request requires an approval before it can be merged, this app can automatically approve them.
* If no other team members are available to approve your PR, Rubber Stamp can approve it so you can get your PR merged.
* If you have an automated process to merge PRs, Rubber Stamp can automatically approve them.

Rubber Stamp will approve a pull request when a specific label is added to the PR.
By default the label can be `Rubber Stamp` or `rubberstamp`.
You can also configure your own labels for Rubber Stamp to watch.
The labels are not case sensitive.

## Installation

Install the [Rubber Stamp](https://github.com/apps/rubber-stamp) app.
The app works right out of the box.
There is no need to add a configuration file.

## Configuration

If you would like Rubber Stamp to watch a custom label, in your repository, add a `.github/rubber-stamp.yml` file.

```yml
labels:
  - Rubber Stamp
  - rubberstamp
```
