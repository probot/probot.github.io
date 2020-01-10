---
title: Boring Cyborg
description: Add labels on PRs based on the FilePaths & Welcome First time users on
  your PR
slug: boring-cyborg
screenshots:
- https://raw.githubusercontent.com/kaxil/boring-cyborg/master/assets/usage-screenshot-1.png
- https://raw.githubusercontent.com/kaxil/boring-cyborg/master/assets/usage-new-issue-new-user-screenshot.png
- https://raw.githubusercontent.com/kaxil/boring-cyborg/master/assets/usage-first-merged-pr.gif
authors:
- kaxil
repository: kaxil/boring-cyborg
host: https://gentle-mesa-48041.herokuapp.com
stars: 5
updated: 2020-01-06 17:25:33 UTC
installations: 6
organizations:
- apache
- jeremylong
- tensorflow
- dependency-check
---

## Features

* Add labels based on the path of the file that are modified in the PR.
* Welcome new users to your project when they open their first Issue/PR or first merged PR by an
automated comment. 
* Insert Issue (Jira/Github etc) link in PR description based on the Issue ID in PR title.

## Usage

1. **[Configure the Github App](https://github.com/apps/boring-cyborg)**
2. After installing the Github app, create `.github/boring-cyborg.yml` in the default branch to enable it
3. It will start scanning for pull requests within few minutes.

```yaml
# Enable "labeler" for your PR that would add labels to PRs based on the paths that are modified in the PR. 
labelPRBasedOnFilePath:
  # Add 'label1' to any changes within 'example' folder or any subfolders
  label1:
    - example/**/*
  
  # Add 'label2' to any file changes within 'example2' folder
  label2: 
    - example2/*

  # Complex: Add 'area/core' label to any change within the 'core' package
  area/core:
    - src/core/*
    - src/core/**/*  
    
  # Add 'test' label to any change to *.spec.js files within the source dir
  test:
    - src/**/*.spec.js

# Comment to be posted to welcome users when they open their first PR
firstPRWelcomeComment: >
  Thanks for opening this pull request! Please check out our contributing guidelines.

# Comment to be posted to congratulate user on their first merged PR
firstPRMergeComment: >
  Awesome work, congrats on your first merged pull request!

# Comment to be posted to on first time issues
firstIssueWelcomeComment: >
  Thanks for opening your first issue here! Be sure to follow the issue template!

# Insert Issue (Jira/Github etc) link in PR description based on the Issue ID in PR title.
insertIssueLinkInPrDescription:
   # specify the placeholder for the issue link that should be present in the description
  descriptionIssuePlaceholderRegexp: "^Issue link: (.*)$"
  matchers:
    # you can have several matches - for different types of issues
    # only the first matching entry is replaced
    jiraIssueMatch:
      # specify the regexp of issue id that you can find in the title of the PR
      # the match groups can be used to build the issue id (${1}, ${2}, etc.).
      titleIssueIdRegexp: \[(AIRFLOW-[0-9]{4})\]
      # the issue link to be added. ${1}, ${2} ... are replaced with the match groups from the
      # title match (remember to use quotes)
      descriptionIssueLink: "[${1}](https://issues.apache.org/jira/browse/${1}/)"
    docOnlyIssueMatch:
      titleIssueIdRegexp: \[(AIRFLOW-X{4})\]
      descriptionIssueLink: "`Document only change, no JIRA issue`"
```
