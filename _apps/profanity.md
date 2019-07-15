---
title: Profanity
description: Marks/Censors Issues and Pull Requests containing offensive content.
slug: profanity
screenshots:
- https://user-images.githubusercontent.com/25513006/38316149-bc43b3c0-3832-11e8-8b13-53216b342027.png
- https://user-images.githubusercontent.com/25513006/38316166-c48f9eb8-3832-11e8-95a3-78773c7120a4.png
authors:
- nickgarlis
repository: nickgarlis/probot-profanity
host: https://probot-profanity.now.sh
stars: 8
updated: 2018-08-27 17:02:44 UTC
installations: 16
organizations:
- tipeio
- fvcproductions
- techqueria
- njzjz
- dgroup
- sargsyan
- hemanth22
- micalevisk
- frilox042
- TrapTeamCCNZ
---

## Usage

1. **[Configure the GitHub App](https://github.com/apps/profanity)**
2. Create `.github/profanity.yml` based on the following template
3. It will start scanning for offensive issues and/or pull requests within an hour and automatically censor/mark any new ones.

A `.github/profanity.yml` file is required to enable the plugin. The file can be empty, or it can override any of these default settings:

```yml
# Configuration for probot-profanity - https://github.com/nickgarlis/probot-profanity

# Language to detect profanity in.
# Choose one of the following: 'de', en', 'es', 'fr', 'it', 'nl', 'pt', 'ru'
language: 'en'

# Set to true to censor issues (defaults to false)
censor: false

# Placeholder to replace the letters of a forbidden word
placeholder: '*'

# A list of extra forbidden words. Set to `[]` to disable
extraWords: []

# A list of forbidden words to be ignored. Set to `[]` to disable
exemptWords: []

# Number of days of inactivity before an inappropriate Issue or Pull Request is closed.
# Set to false to disable. If disabled, issues still need to be closed manually, but will remain marked as inappropriate.
daysUntilClose: 2

# Issues or Pull Requests with these labels will never be considered inappropriate. Set to `[]` to disable
exemptLabels: []

# Set to true to ignore issues in a project (defaults to false)
exemptProjects: false

# Set to true to ignore issues in a milestone (defaults to false)
exemptMilestones: false

# Label to use when marking as inappropriate
profanityLabel: inappropriate

# Comment to post when marking as profanity. Set to `false` to disable
markComment: >
  This issue has been automatically marked as inappropriate because
  it contains forbidden words. It will be closed if no further edit
  occurs. Thank you for your contributions.

# Comment to post when removing the inappropriate label.
# unmarkComment: >
#   Your comment here.

# Comment to post when closing an inappropriate Issue or Pull Request.
# closeComment: >
#   Your comment here.  

# Limit the number of actions per hour, from 1-30. Default is 30
limitPerRun: 30

# Limit to only `issues` or `pulls`
# only: issues

# Optionally, specify configuration settings that are specific to just 'issues' or 'pulls':
# pulls:
#   markComment: >
#   This issue has been automatically marked as inappropriate because
#   it contains forbidden words. It will be closed if no further edit
#   occurs. Thank you for your contributions.

# issues:
#   exemptLabels:
#     - somelabel
```
