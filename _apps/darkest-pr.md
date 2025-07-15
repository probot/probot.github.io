---
title: Darkest-PR
description: Darkest-PR is a GitHub app/bot for responding to actions and events
  in your repository using contextual quotes from Darkest Dungeon.
slug: darkest-pr
screenshots:
  - https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/PR-closed-no-merge-1.png
  - https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/approve-1.png
  - https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/unassigned-1.png
  - https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/assigned-1.png
  - https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/request-change-1.png
  - https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/request-change-2.png
  - https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/review-comment.png
  - https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/tag-comment-overconfidence.png
authors: skywarth
repository: skywarth/darkest-PR
host: https://darkest-pr.vercel.app/
stars: 23
updated: 2025-07-14 07:48:33 UTC
---

# Darkest-PR

![Darkest-PR Banner](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/banner-ultra-wide-medium.png "Darkest-PR Banner")


> Ruin has come to your repository! 

Ever wanted the ancestor from Darkest Dungeon to narrate your development in his eccentric way?

Darkest-PR is a GitHub app/bot for responding to actions and events in your repository using contextual quotes from Darkest Dungeon.

[![codecov](https://codecov.io/gh/skywarth/darkest-PR/graph/badge.svg?token=Z86VA7I4HH)](https://codecov.io/gh/skywarth/darkest-PR)
[![Known Vulnerabilities](https://snyk.io/test/github/skywarth/darkest-PR/badge.svg)](https://snyk.io/test/github/skywarth/darkest-PR)
[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/darkest-pr)](https://darkest-pr.vercel.app/)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=skywarth_darkest-PR&metric=bugs)](https://sonarcloud.io/summary/new_code?id=skywarth_darkest-PR)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=skywarth_darkest-PR&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=skywarth_darkest-PR)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=skywarth_darkest-PR&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=skywarth_darkest-PR)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=skywarth_darkest-PR&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=skywarth_darkest-PR)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=skywarth_darkest-PR&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=skywarth_darkest-PR)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=skywarth_darkest-PR)](https://sonarcloud.io/summary/new_code?id=skywarth_darkest-PR)

## Links:
- Repository and documentation: https://github.com/skywarth/darkest-PR
- GitHub Marketplace listing: https://github.com/marketplace/darkest-pr
- GitHub App Page: https://github.com/apps/darkest-pr


## What is this?

Darkest-PR (PR stands for Pull-Request) is a GitHub app/bot to narrate your development, making development more exciting *or desperate*.

When certain events occur in the repository, Darkest-PR automatically evaluates the situation and responds with a ***fitting*** quote of ancestor from Darkest Dungeon.
Making the development more like a dungeon crawler run, a sensational journey, more *alive*, more sentimental, more thrilling and more depressing...

Depending on the contextual emotional matrix of the event, it could respond with a quote that'll raise the spirits of your teammates, rally their souls, or it could leave a comment to shame them for their failure, or compliment their greatness, strike fear into their hearts, speak out loud their rage. 

Imagine such cases:
- Someone is removed from PR assignment and the bot responds with:
  - > "Send this one to journey elsewhere, for we have need of sterner stock."
- PR is rejected (request change) and the bot responds with:
  - > "Carelessness will find no clemency in this place!"
- PR is closed without merge and the bot responds with:
  - > "A setback, but not the end of things!"
- PR is accepted and merged immediately and the bot responds with:
  - > "A singular strike!"
- Someone is assigned to an issue and the bot responds with:
  - > "More arrive, foolishly seeking fortune and glory in this domain of the damned.",

Sometimes the quotes are so fitting, so perfect for the situation; it makes development a marvelous journey. Such epic that is worth narrating.

## Usage

### Demo

#### Demo Repository
There is a [demo repository](https://github.com/skywarth/bot-test-repo) I've been using since the development of the project.
- [Demo PR](https://github.com/skywarth/bot-test-repo/pull/13)
- [Demo issue (Issue events)](https://github.com/skywarth/bot-test-repo/issues/12)
- [Demo issue (by comment)](https://github.com/skywarth/bot-test-repo/issues/11)

Go ahead and take a look at it there, maybe even add a comment tagging the app like `@Darkest-PR` and you will get a quote from the ancestor.

#### Screenshots

See below screenshots or navigate to [screenshots directory](https://github.com/skywarth/darkest-PR/tree/master/resc/screenshots) to see it in action.

<details>
  <summary><b>Click here to see the screenshots</b></summary>


- PR approved

  ![Pull Request Approved](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/approve-1.png)

- PR closed without merge

  ![Pull Request Closed without merge](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/PR-closed-no-merge-1.png)

- PR request change (rejected)

  ![PR request change #1](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/request-change-1.png)

  ![PR request change #2](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/request-change-2.png)

- PR review comment

  ![Pull Request review comment](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/review-comment.png)


- PR assignee added

  ![Pull Request Assignee added](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/assigned-1.png)

- PR assignee removed

  ![Pull Request Assignee removed](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/unassigned-1.png)


- Tagging the app

  ![Comment tagging the app](https://raw.githubusercontent.com/skywarth/darkest-PR/master/resc/screenshots/tag-comment-overconfidence.png)


</details>

### Installation

Installation is pretty straightforward and instantaneous. There are two methods to install:

#### Method #1

1. Go to the Darkest-PR's [GitHub App page](https://github.com/apps/darkest-pr)
2. Click 'Install' button
3. Select the repositories you want to install the app
4. Confirm the permission and click 'Install'
5. Done! Enjoy.
- So now whenever a [use-case](https://github.com/skywarth/darkest-PR?tab=readme-ov-file#use-cases) event occurs, or whenever you mention the app like `@Darkest-PR` it will respond to you!
- Give it a try, submit a comment in any issue/PR in your repository mentioning the app. E.g: `@Darkest-PR ancestor, do your thing.`


#### Method #2

1. Visit the public [GitHub Marketplace listing](https://github.com/marketplace/darkest-pr)
2. Click `add` button
3. Confirm the user/organization to install the app to
4. Select the repositories you want the app to be installed
5. Done! Enjoy.


