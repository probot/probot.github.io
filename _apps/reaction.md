---
title: Reaction Comments
description: Deletes +1 comments and encourages the use of GitHub reactions.
slug: reaction
screenshots:
- https://raw.githubusercontent.com/dessant/reaction-comments/master/assets/screenshot.png
authors:
- dessant
repository: dessant/reaction-comments
host: https://probot-reaction-comments.glitch.me
stars: 25
updated: 2019-06-10 14:00:22 UTC
installations: 74
organizations:
- zealdocs
- invertase
- microsoft
- Mottie
- CellularPrivacy
- Radarr
- sethvargo
- GameServerManagers
- idehub
- chefspec
---

A GitHub App that deletes reaction comments, such as +1,
and encourages the use of GitHub reactions.

## How It Works

The app detects if a new comment consists solely of emojis and shortcodes
used in GitHub reactions. A matching comment is either replaced
with the message set in `reactionComment` and deleted after a day,
or it is deleted immediately, if `reactionComment` is set to `false`.

## Usage

1. **[Install the GitHub App](https://github.com/apps/reaction)**
   for the intended repositories
2. Create `.github/reaction.yml` based on the template below

**If possible, install the app only for select repositories.
Do not leave the `All repositories` option selected, unless you intend
to use the app for all current and future repositories.**

#### Configuration

Create `.github/reaction.yml` in the default branch to enable the app,
or add it at the same file path to a repository named `.github`.
The file can be empty, or it can override any of these default settings:

```yaml
# Configuration for Reaction Comments - https://github.com/dessant/reaction-comments

# Issues and pull requests with these labels accept reaction comments.
# Set to `[]` to disable
exemptLabels: []

# Replace matching comments with this message, `{comment-author}` is an
# optional placeholder. Set to `false` to disable
reactionComment: >
  :wave: @{comment-author}, did you mean to use
  a [reaction](https://git.io/vhzhC) instead?

# Limit to only `issues` or `pulls`
# only: issues

# Optionally, specify configuration settings just for `issues` or `pulls`
# issues:
#   exemptLabels:
#     - party-parrot

# pulls:
#   reactionComment: false

# Repository to extend settings from
# _extends: repo
```

## Supporting the Project

The continued development of Reaction Comments is made possible
thanks to the support of awesome backers. If you'd like to join them,
please consider contributing with [Patreon](https://www.patreon.com/dessant).
