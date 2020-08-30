---
# A human-friendly name of your listing
title: ApproveMan
# A short description of what your app does
description: Approves pull requests with safe changes for protected branches.
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: approveman
# Include a few screenshots that show your app in action
screenshots:
- https://somewebsite.com/your-screenshot.png
# The GitHub usernames of anyone who authored the app
authors:
- tianhaoz95
# The repository where the code is located
repository: tianhaoz95/approveman
# The address where this app is deployed
host: https://approveman.herokuapp.com/probot
---

ApproveMan is a GitHub app that helps approve pull requests with safe changes.

> This is especially useful for protected branches.

## Motivation

To maintain the health of repositories, it's important to set up review requirements and continuous integration to make sure every pull request that goes in is good.

For example, GitHub provides "protected branches" as a way to put hard requirements including passing checks and code review approvals on incoming pull requests.

However, not all pull requests require human attention.

For example, it's reasonable for a repository to set up a location with a user's GitHub ID like `[project_root]/playground/tianhaoz95` to allow developers add quick experiments that they want to keep a record and share with the team.

In this case, if I want to add some notes in `[project_root]/playground/tianhaoz95/my-note.md`, there is no reason to ask another developer to review the change.

## Usage

You can configure the behavior by adding rules into `.github/approveman.yml`.

Here is an example that, given that my GitHub ID is `tianhaoz95`, approves all the changes that go into `playground/tianhaoz95` and `docs/personal/tianhaoz95`:

```yml
ownership_rules:
  directory_matching_rules:
    - name: personal projects in experimental
      path: playground/{{username}}/**/*
    - name: personal documentation
      path: docs/personal/{{username}}/**/*
```

Note:

-   The default config contains `playground/{{username}}/**/*` if no config file is provided in the repository.
-   All pull requests that modify files within `.github` the directory is denied regardless of the rules in the configuration for safety.
