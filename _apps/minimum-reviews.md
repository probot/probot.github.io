---
title: Minimum reviews
description: Enforce a minimum number of reviews on Pull Requests
slug: minimum-reviews
screenshots:
- https://user-images.githubusercontent.com/24159/38566574-0015d8b6-3cb2-11e8-872f-e9495192581e.png
authors:
- raulriera
repository: raulriera/probot-minimum-reviews
host: https://horn-produce.glitch.me/
stars: 4
updated: 2018-04-21 03:11:32 UTC
installations: 5
organizations:
- divyenduz
- aidminutes
---

# Probot: Minimum Reviews

![Screenshot](https://user-images.githubusercontent.com/24159/38566574-0015d8b6-3cb2-11e8-872f-e9495192581e.png)

## Usage

1. **[Configure the GitHub App](https://github.com/apps/minimum-reviews)**
2. Create `.github/minimum-reviews.yml` based on the following template.
3. It will wait for pull requests to be reviewed before marking them as ready to be merged.

A `.github/minimum-reviews.yml` file is required to enable the plugin.

```yml
# Number of reviews required to mark the pull request as valid
reviewsUntilReady: 2

# Number of changes in the pull request to start enforcing the reviewsUntilReady rule
changesThreshold: 100

# Message to display when the commit status passes
readyMessage: 'No pending reviews'

# Message to display when the commit status fails
notReadyMessage: 'Pending review approvals'

# Status to set the commit to when waiting for reviews
# 'failure, error, and pending' are the suggested options
notReadyState: 'pending'
```
