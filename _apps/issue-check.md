---
title: Issue Check
description: Checks issues against keywords and task lists to ensure required info
  is there
slug: issue-check
screenshots:
- https://user-images.githubusercontent.com/8315038/76657935-f1f68a00-6540-11ea-9f38-57410f71a49a.png
authors:
- stevenzeck
repository: stevenzeck/issue-check
host: https://issue-check.glitch.me
stars: 2
updated: 2020-12-01 21:47:14 UTC
installations: 38
organizations:
- Requarks
- Maatwebsite
- laraform
- coolcode
- CartoonFan
- njzjz
- velotoxicsounds
- frilox042
- hemanth22
- mehmetanbaki
---

## What It Does

issue-check looks at the body of an issue and adds a label and comment if it has unchecked boxes in the tasklist and/or has missing keywords.

## Setup

1. Install the [GitHub app](https://github.com/apps/issue-check)
2. Create a `.github/issuecomplete.yml` file in your repository (see [issuecomplete.yml](https://github.com/stevenzeck/issue-check/blob/master/issuecomplete.yml) for a template). If you don't create this, the app will use defaults.

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

See [docs/deploy.md](https://github.com/stevenzeck/issue-check/blob/master/docs/deploy.md) if you would like to run your own instance of this app.
