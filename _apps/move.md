---
title: Move Issues
description: Moves issues to a different repository.
slug: move
screenshots:
- https://raw.githubusercontent.com/dessant/move-issues/master/assets/source-issue.png
- https://raw.githubusercontent.com/dessant/move-issues/master/assets/target-issue.png
authors:
- dessant
repository: dessant/move-issues
host: https://probot-move-issues.glitch.me
stars: 6
updated: 2017-12-13 03:03:26 UTC
installations: 13
organizations:
- kivy
- SpongePowered
- probot
- red-eclipse
- Dallas-Makerspace
- devopsdays
- TeamLapen
- aVengineers
- Triadai
---

A GitHub App that Moves issues to a different repository.

## Usage

1. **[Install the GitHub App](https://github.com/apps/move)**
2. Create `.github/move.yml` based on the template below
3. Move an issue by creating a comment with the command: `/move to <repo>`

#### Configuration

Create `.github/move.yml` in the default branch to enable the app.
The file can be empty, or it can override any of these default settings:

```yml
# Configuration for move-issues - https://github.com/dessant/move-issues

# Delete the command comment. Ignored when the comment also contains other content
deleteCommand: true
# Close the source issue after moving
closeSourceIssue: true
# Lock the source issue after moving
lockSourceIssue: false
# Set custom aliases for targets
# aliases:
#   r: repo
#   or: owner/repo
```

#### Command Syntax

```sh
/move [to ][<owner>/]<repo>
```

###### Examples:

```sh
/move to repo
/move to owner/repo
/move repo
/move owner/repo
```

## Supporting the Project

Move Issues is an MIT-licensed open source project. Its ongoing
development is made possible thanks to the support of awesome backers.
If you'd like to join them, please consider contributing with
[Patreon](https://www.patreon.com/dessant).
