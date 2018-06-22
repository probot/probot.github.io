---
# A human-friendly name of your listing
title: reviewed
# A short description of what your app does
description: Add label to pull request when all reviewers approved.
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: reviewed
# Include a few screenshots that show your app in action
screenshots:
- https://github.com/g-ozawa/reviewed/raw/master/assets/reviewed_ss.png
# The GitHub usernames of anyone who authored the app
authors: [ g-ozawa ]
# The repository where the code is located
repository: g-ozawa/reviewed
# The address where this app is deployed
host: https://reviewed.now.sh
---

# reviewed

automatically add label to pull request when all reviewers approved.

![Screenshot](https://github.com/g-ozawa/reviewed/raw/master/assets/reviewed_ss.png)

# Usage
1. **[Install the app](https://github.com/apps/reviewed)**.
2. Create a `.github/reviewed.yml` file in your repository, if you want to change label name to add.(It works without .github/reviewed.yml, in this case it uses default 'reviewed' label)

```yaml
labelName: reviewed
```
