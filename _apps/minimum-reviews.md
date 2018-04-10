---
# A human-friendly name of your listing
title: Minimum reviews
# A short description of what your app does
description: Enforce a minimum number of reviews on Pull Requests
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: n/a
# Include a few screenshots that show your app in action
screenshots:
- https://user-images.githubusercontent.com/24159/38566574-0015d8b6-3cb2-11e8-872f-e9495192581e.png
# The GitHub usernames of anyone who authored the app
authors: [ raulriera ]
# The repository where the code is located
repository: raulriera/probot-minimum-reviews
# The address where this app is deployed
host: https://horn-produce.glitch.me/
---

# Probot: Minimum Reviews

> a GitHub App built with [Probot](https://github.com/probot/probot) that enforces a minimum number of reviews in Pull Requests.

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

## Deployment

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.
