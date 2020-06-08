---
title: Boring Cyborg
description: Add labels on PRs based on the FilePaths & Welcome First time users &
  much more
slug: boring-cyborg
screenshots:
- https://raw.githubusercontent.com/kaxil/boring-cyborg/master/assets/usage-screenshot-1.png
- https://raw.githubusercontent.com/kaxil/boring-cyborg/master/assets/usage-new-issue-new-user-screenshot.png
- https://raw.githubusercontent.com/kaxil/boring-cyborg/master/assets/usage-first-merged-pr.gif
authors:
- kaxil
repository: kaxil/boring-cyborg
host: https://boring-cyborg.herokuapp.com
stars: 18
updated: 2020-04-21 13:10:23 UTC
installations: 79
organizations:
- apache
- PyTorchLightning
- quarkusio
- golangci
- bisq-network
- jeremylong
- lballabio
- Zettlr
- tensorflow
- dependency-check
---

## Features

* Add labels based on the path of the file that are modified in the PR.
* Welcome new users to your project when they open their first Issue/PR or first merged PR by an
automated comment. 
* Insert Issue (Jira/Github etc) link in PR description based on the Issue ID in PR title.
* Verifies if commits/PR titles match the regular expression specified
* Check if a branch is up to date with the master when specific files are modified in the PR. This is helpful when you desire the changes to be applied sequentially, for example, alembic migrations.

## Usage

1. **[Configure the Github App](https://github.com/apps/boring-cyborg)**
2. After installing the Github app, create `.github/boring-cyborg.yml` in the default branch to enable it
3. It will start scanning for pull requests within few minutes.

```yaml
##### Labeler ##########################################################################################################
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

##### Greetings ########################################################################################################
# Comment to be posted to welcome users when they open their first PR
firstPRWelcomeComment: >
  Thanks for opening this pull request! Please check out our contributing guidelines.

# Comment to be posted to congratulate user on their first merged PR
firstPRMergeComment: >
  Awesome work, congrats on your first merged pull request!

# Comment to be posted to on first time issues
firstIssueWelcomeComment: >
  Thanks for opening your first issue here! Be sure to follow the issue template!

###### IssueLink Adder #################################################################################################
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

###### Title Validator #################################################################################################
# Verifies if commit/PR titles match the regexp specified
verifyTitles:
  # Regular expression that should be matched by titles of commits or PR
  titleRegexp: ^\[AIRFLOW-[0-9]{4}\].*$|^\[AIRFLOW-XXXX\].*$
  # If set to true, it will always check the PR title (as opposed to the individual commits).
  alwaysUsePrTitle: true
  # If set to true, it will only check the commit in case there is a single commit.
  # In case of multiple commits it will check PR title.
  # This reflects the standard behaviour of Github that for `Squash & Merge` GitHub
  # uses the PR title rather than commit messages for the squashed commit ¯\_(ツ)_/¯
  # For single-commit PRs it takes the squashed commit message from the commit as expected.
  #
  # If set to false it will check all commit messages. This is useful when you do not squash commits at merge.
  validateEitherPrOrSingleCommitTitle: true
  # The title the GitHub status should appear from.
  statusTitle: "Title Validator"
  # A custom message to be displayed when the title passes validation.
  successMessage: "Validation successful!"
  # A custom message to be displayed when the title fails validation.
  # Allows insertion of ${type} (commit/PR), ${title} (the title validated) and ${regex} (the titleRegexp above).
  failureMessage: "Wrong ${type} title: ${title}"

###### PR/Branch Up-To-Date Checker ####################################################################################
# Check if the branch is up to date with master when certain files are modified
checkUpToDate:
  # The default branch is "master", change the branch if you want to check against a different target branch  
  targetBranch: master
  files:
  # File paths that you want to check for
  # In this example, it checks if the branch is up to date when alembic migrations are modified in the PR.
  # It helps avoid multiple heads in alembic migrations in a collaborative development project.
    - airflow/migrations/*
    - airflow/migrations/**/*
    - airflow/alembic.ini
```

All the features are optional. Simply add the config for the feature you want to use.

