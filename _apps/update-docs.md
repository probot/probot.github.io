---
title: Update Docs
description: Replies to newly opened pull requests that do no update a file in the `/docs` folder or the `README`
slug: update-docs
screenshots:
- /assets/screenshots/update-docs/1.png
stars: 4
authors: [ hiimbex ]
repository: behaviorbot/update-docs
updated: 2017-08-15 15:27:36 UTC
---


Update Docs comments on newly opened Pull Requests that do not update either the README or a file in the `/docs` folder.

Create a `.github/config.yml` file that contains the contents you would like to reply within an `updateDocsComment`. Optionally, you can also add an `updateDocsWhiteList` that includes terms, that if found in the title, the bot will not comment on.

```yml
# Configuration for update-docs - https://github.com/behaviorbot/update-docs

# Comment to be posted to on PRs that don't update documentation
updateDocsComment: >
  Thanks for opening this pull request! The maintainers of this repository would appreciate it if you would update some of our documentation based on your changes.

# Terms that if found in the title of a PR will prevent the bot from commenting on it
updateDocsWhiteList:
  - bug
  - chore
```
