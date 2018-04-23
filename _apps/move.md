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
stars: 11
updated: 2018-04-23 15:52:56 UTC
installations: 32
organizations:
- atom
- home-assistant
- kivy
- CachetHQ
- ethereum
- probot
- GameServerManagers
- bpkg
- jahirfiquitiva
- eXist-db
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
