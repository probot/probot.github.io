---
title: Issue Complete
description: Marks incomplete issues with a label and comment
slug: issue-complete
screenshots:
- https://user-images.githubusercontent.com/8315038/37742479-cc18daaa-2d33-11e8-886e-6de63df96edd.png
authors:
- szeck87
repository: szeck87/issue-complete
host: https://issue-complete.glitch.me
stars: 2
updated: 2018-04-26 17:55:25 UTC
installations: 3
organizations:
- Maatwebsite
- Glavin001
---

## What It Does

issue-complete looks at the body of an issue and adds a label and comment if it has unchecked boxes in the tasklist and/or has missing keywords.

## Setup

1. Install the [GitHub app](https://github.com/apps/issue-complete)
2. Create a `.github/issuecomplete.yml` file in your repository (see [issuecomplete.yml](https://github.com/szeck87/issue-complete/blob/master/issuecomplete.yml) for a template). If you don't create this, the app will use defaults.

```yaml
# The name of the label to apply when an issue does not have all tasks checked
labelName:

# The color of the label in hex format (without #)
labelColor:

# The text of the comment to add to the issue in addition to the label
commentText: >
  Text here.
  More text here.
  And more text here.

# Whether or not to ensure all checkboxes are checked
checkCheckboxes: true  

keywords:
  - gist
  - recreate
```

## Deploy

See [docs/deploy.md](https://github.com/szeck87/issue-complete/blob/master/docs/deploy.md) if you would like to run your own instance of this app.
