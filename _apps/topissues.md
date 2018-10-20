---
# A human-friendly name of your listing
title: Top Issues

# A short description of what your app does
description: Labels issues with the most "+1" emoji reactions

# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: top-issues-bot

# Include a few screenshots that show your app in action
screenshots: 
- https://raw.githubusercontent.com/adamzolyak/gh-vote-bot/master/docs/issue_list.png
- https://raw.githubusercontent.com/adamzolyak/gh-vote-bot/master/docs/issue_detail.png

# The GitHub usernames of anyone who authored the app
authors: [adamzolyak]

# The repository where the code is located
repository: adamzolyak/gh-vote-bot

# The address where this app is deployed
host: https://gh-vote-bot.herokuapp.com
---

## How It Works

The Top Issues bot runs every 25 minutes, labeling top issues and unlabeling issues that are no longer top issues.  Top issues are issues with the most "+1" emoji reactions on the issue description.  "+1" emoji reactions on issues comments are not considered.  

## Installation

After installing the app, create a `topissuebot.yml` file to the `.github` directory to enable the bot. The file must contain the following properties.  Customize the values as desired.

```yml
# Configuration for top-issue-bot
labelName: ":thumbsup: Top Issue!"
labelColor: "f442c2"
numberOfIssuesToLabel: 5
```
