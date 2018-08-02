---
title: PR Triage
description: Triage pull request
slug: pr-triage
screenshots:
- https://user-images.githubusercontent.com/1587053/35917561-f4928e02-0c51-11e8-95d3-81b4f44ed6d2.png
authors:
- sotayamashita
repository: pr-triage/pr-triage
host: https://pr-triage.glitch.me
stars: 8
updated: 2018-08-02 07:35:39 UTC
installations: 20
organizations:
- kazupon
- HcySunYang
- awesome-css-group
- vuejs
- LinioIT
- vuejs-jp
- kotamat
- GoBike
- Innovatube
- glitch-tools
---

## Install

PRTriage does **"NOT"** have permission to `Read & Write` your code :see_no_evil:. For more details, see Permission and Subscribe section. If you have any question, please free to ask us via [creating an issue](https://github.com/pr-triage/pr-triage/issues/new?labels=question).

1. :runner: Go to [PRTriage App Page](https://github.com/apps/pr-triage)
1. :rocket: Click **Install**
1. :mag: Please choose a repository
1. :sparkles: That's it.


## How it works

<p>
  <img src="https://user-images.githubusercontent.com/1587053/35917561-f4928e02-0c51-11e8-95d3-81b4f44ed6d2.png" width="100%">
</p>

- Do nothing if your title of PR starts from `WIP`, `[WIP]` or `WIP:`.
- Add a `PR: unreviewed` label if your PR does not have any reviews for latest commit.
- Add a `PR: reviewed-changes-requested` label if your PR have reviewed and got **Change request** for latest commit.
- Add a `PR: review-approved` label if your PR have reviewed and got **Approve** for latest commit.


## Permission & Subscribe event

Here are permission and event PRTriage is requested and subscribe:

- :x: **No** access to code
- :white_check_mark: Read access to metadata
- :white_check_mark: Read and write access to pull requests to create, add and remove labels PRTriage manipulate.
