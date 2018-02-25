---
title: Review Me
description: Decide when a pull request is ready for review based on its statuses
slug: review-me
screenshots:
- https://github.com/ahmed-taj/probot-review-me/raw/master/docs/screenshot.png
authors:
- ahmed-taj
repository: ahmed-taj/probot-review-me
host: https://probot-review-me.now.sh
---

## Why?

It's not always necessary for all status checks to pass, sometimes we need more than ✕ or ✓ to determine if a pull request is ready for review or not.
## How it works

The app listens to pull request statuses and adds a review label (`[Review Me]` by default) if all statuses matched.

That way, maintainers/reviewers can filter pull requests to look only into ready ones.

## Usage

1. **[Configure the GitHub App](https://github.com/apps/review-me)**
2. Create `.github/review-me.yml` based on the following template
3. It will start to listen to pull request statuses and update them accordingly.

A `.github/review-me.yml` file is required to enable the app:

```yaml
# List of contexts (i.e. apps) and their corresponding statuses
when:
  # Allowed statuses are:
  #
  #   - success
  #   - failure
  #   - pending
  #   - error
  continuous-integration/travis-ci/pr: success
  wip: success

# Override default label (optional)
label: Review Me
```


