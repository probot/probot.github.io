---
title: Move Issues
description: Moves issues between repositories.
slug: move
screenshots:
- https://raw.githubusercontent.com/dessant/move-issues/master/assets/source-issue.png
- https://raw.githubusercontent.com/dessant/move-issues/master/assets/target-issue.png
authors:
- dessant
repository: dessant/move-issues
host: https://probot-move-issues.glitch.me
stars: 37
updated: 2019-06-10 11:47:16 UTC
installations: 130
organizations:
- microsoft
- apache
- flutter
- ethereum
- atom
- videojs
- adobe
- home-assistant
- kivy
- tidyverse
---

A GitHub App that moves issues between repositories.

## Usage

1. **[Install the GitHub App](https://github.com/apps/move)**
   for all source and target repositories
2. Create `.github/move.yml` in the source repository based on the template below
3. Move an issue by creating a comment with this command: `/move to <repo>`

Users must have the following permissions in order to move issues:

* Write access to the source repository
* Write access to the target repository (when the source or target repository
  is private, or when they have different owners)

**If possible, install the app only for select repositories.
Do not leave the `All repositories` option selected, unless you intend
to use the app for all current and future repositories.**

#### Configuration

Create `.github/move.yml` in the default branch to enable the app,
or add it at the same file path to a repository named `.github`.
The file can be empty, or it can override any of these default settings:

```yaml
# Configuration for Move Issues - https://github.com/dessant/move-issues

# Delete the command comment when it contains no other content
deleteCommand: true

# Close the source issue after moving
closeSourceIssue: true

# Lock the source issue after moving
lockSourceIssue: false

# Mention issue and comment authors
mentionAuthors: true

# Preserve mentions in the issue content
keepContentMentions: false

# Move labels that also exist on the target repository
moveLabels: true

# Set custom aliases for targets
# aliases:
#   r: repo
#   or: owner/repo

# Repository to extend settings from
# _extends: repo
```

#### Command Syntax

```
/move [to ][<owner>/]<repo>
```

###### Examples:

```
/move to repo
/move to owner/repo
/move repo
/move owner/repo
```

## Supporting the Project

The continued development of Move Issues is made possible
thanks to the support of awesome backers. If you'd like to join them,
please consider contributing with [Patreon](https://www.patreon.com/dessant).
