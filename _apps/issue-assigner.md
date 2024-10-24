---
title: Issue Assigner
description: A bot for managing issue assignments
slug: issue-assigner
screenshots:
  - https://github.com/Varun-Kolanu/issue-assigner/blob/main/assets/maintainer-opened-issue.jpg?raw=true
  - https://github.com/Varun-Kolanu/issue-assigner/blob/main/assets/claim-issue.jpg?raw=true
  - https://github.com/Varun-Kolanu/issue-assigner/blob/main/assets/have-existing-issues.jpg?raw=true
  - https://github.com/Varun-Kolanu/issue-assigner/blob/main/assets/abandon-issue.jpg?raw=true
authors:
  - Varun-Kolanu
repository: Varun-Kolanu/issue-assigner
host: https://issue-assigner.onrender.com
stars: 14
updated: 2024-10-19 15:12:29 UTC
---

# Features

- Automatic Assignment: Users can request assignment to an issue by commenting with a specific command.
- Limit Assignees: Configure maximum number of assignees allowed per issue.
- Limit Assigned Issues: Set a limit on the number of issues a user can be assigned to at a time in the repository.
- Automatic unassignment: Users can request unassignment to an issue by commenting with a specific command.
- Issue opened comments: Bot greets the user when issue is opened
- Customizable Responses: Customize the bot's responses and prompts using a YAML configuration file.

# Usage

1. [Install](https://github.com/apps/issue-assigner) the bot in your account.
2. After installing the bot, create a file `.github/issue-assigner.yml` in the repo and paste the following content:

   ```yml
   # Remove or comment the line from yml if you don't need that feature

   # The name of bot you would like to be mentioned by users. {name} will be replaced by the below name
   name: "issue-assigner"

   ######################## Issue assignment ########################

   # Prompt entered by user to request assign the issue to him/her
   assign-prompt: "@{name} claim" # For example, @issue-assigner claim

   # Comment from bot if the issue got already assigned to the user requesting
   issue-already-assigned: "You have already been assigned to this issue."

   # Maximum number of assignees for an issue
   max-assignees: 1

   # Maximum number of assignees reached for the requested issue
   max-assignees-reached: "Sorry, maximum limit for assignees in this issue has reached. Please check other issues or contact a maintainer."

   # Maximum number of open issues a user can have assigned at a time in the repo
   max-issues-for-user: 1

   # If all OK, the comment from bot to tell that issue got assigned
   assigned-comment: "This issue has been successfully assigned to you! 🚀"

   ######################## Issue un-assignment ########################

   # Prompt entered by user to request un-assignment of the issue to him/her
   unassign-prompt: "@{name} abandon"

   # If the issue was already not assigned to the user
   issue-was-not-assigned: "You were not assigned to this issue."

   # If criteria is matched, the issue will get un-assigned
   unassigned-comment: "You have been unassigned to this issue successfully."

   ######################## Issue Opened ########################

   # If the user who opened issue is NOT a maintainer of the repo
   issue-opener-not-maintainer: "Thank you for opening this issue. Maintainers will check and approve if seems to be useful."

   # If the user who opened issue IS a maintainer of the repo
   issue-opener-is-maintainer: "Comment '@{name} claim' to get this issue assigned or '@{name} abandon' to get this issue unassigned."
   ```

3. You can remove a line from yml if you don't need that feature.
4. You can edit the values in the yml to customize the comments from the bot.