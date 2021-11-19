---
title: Check Group
description: Groups CI checks based on the sub-projects for monorepo projects.
slug: check-group
screenshots:
  - https://github.com/tianhaoz95/check-group/raw/master/docs/assets/screenshot/example_pr_checks.png
  - https://github.com/tianhaoz95/check-group/raw/master/docs/assets/screenshot/check_details.png
authors:
  - tianhaoz95
repository: tianhaoz95/check-group
host: https://check-group.herokuapp.com
stars: 7
updated: 2021-11-18 20:21:14 UTC
---

Groups CI checks based on the sub-projects for monorepo projects.

## Motivation

For example, a monorepo project can define that changes checked into documentation (e.g. files in `docs/**.md`) should pass a set of checks (e.g. `markdown lint` and `github_pages_build`), and changes checked into mobile app source code (e.g. files in `clients/app/**.dart`) should pass another set of checks (e.g. `app_unit_tests` and  `app_integration_test`) before being merged. It's also possible that there is a set of checks to make sure related sub-projects are compatible (e.g. `compatibility_check`).

For the situation above, there is no easy way to guard the main branch with protected branch schema. The project has to either only define a subset of full CI checks as requirement leaving the main branch less secure or define and run a full list of CI checks for every pull request slowing down merging process.

With **Check Group**, we can add one more CI check that is a combination of CI checks based on sub-projects of interests. The protected branch rule can depend only on the combined check.

To fit the example above into the usecase, we can use the following configuration to tell Check Group how to collect required checks:

```yml
subprojects:
  - id: documentation
    paths:
      - "docs/**.md"
    checks:
      - "markdown_lint"
      - "github_pages_build"
  - id: mobile_app
    paths:
      - "clients/app/**"
    checks:
      - "app_static_analysis"
      - "app_unit_tests"
      - "compatibility_check"
  - id: cli_app
    paths:
      - "clients/cli/**"
    checks:
      - "cli_unit_tests"
      - "compatibility_check"
```

With the configuration above, Check Group collects the requirements that will secure the main branch and only LGTM if they all pass.

Here is an example of how it works in the [pull request](https://github.com/tianhaoz95/check-group-demo/pull/1):

![screenshot of the pr checks](https://github.com/tianhaoz95/check-group/raw/master/docs/assets/screenshot/example_pr_checks.png)

A list of requirements and current fulfillment status is available in the "Details":

![screenshot of the details view](https://github.com/tianhaoz95/check-group/raw/master/docs/assets/screenshot/check_details.png)

Note: since Check Group converts all required checks into a single check to make protected branch happy, the repository only needs to run the affected checks for pull requests. There are many ways to do on every CI/CD platform. Here's an example with GitHub Actions for the usecase above (for more details, check out the [example project](https://github.com/tianhaoz95/check-group-demo)):

```yml
name: app checks
on:
  pull_request:
    branches:
      - "master"
    paths:
      - "clients/app/**"
jobs:
  app_static_analysis: ...
  app_unit_tests: ...
```
