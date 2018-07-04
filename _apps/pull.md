---
title: Pull
description: Keep your forks up-to-date.
slug: pull
screenshots:
- https://user-images.githubusercontent.com/5880908/40864471-046ffcd2-65c2-11e8-83cb-706e24bde80d.png
- https://user-images.githubusercontent.com/5880908/40864529-32647474-65c2-11e8-9cdd-d325f2d7a6e4.png
authors:
- wei
repository: wei/pull
host: https://pull.now.sh
stars: 27
updated: 2018-07-04 13:44:58 UTC
installations: 14
organizations:
- audiohacked
- wei
- security-geeks
---

Keep your forks up-to-date via automatic pull requests, merges, or hard resets.


## Features

 1. A pull request is created when an upstream is updated (checks periodically).
 1. Pull requests can be automatically merged or hard reset to match upstream.

_Upstream must be in the same fork network_


## Setup

:warning:**Before you start:** _Create a new branch if you have made changes to your fork's default (master) branch._


### Basic setup (without config):

 1. Run `git clone --mirror` to make a backup (Recommended if you have changes).
 1. Install **[![Pull](https://cdn.rawgit.com/wei/40d98877c6ac5f917d78ccfe72a0f928/raw/0f6ee2e8715412295998e68754027505f30d0f91/pull-18h.svg) Pull app](https://github.com/apps/pull)**.
 1. With zero-configuration, Pull app will automatically watch and pull in upstream's default (master) branch to yours with **hard reset**.

:bulb:_Do NOT touch default (master) branch in any forks. Always create new branches to work on._


-----
For more advanced setup and customization, please visit [wei/pull](https://github.com/wei/pull#readme).
