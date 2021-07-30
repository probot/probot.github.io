---
title: PR Label Enfoce
description: Enforce certain labels on a PR before you can merge by using status checks
slug: pr-label-enforcer
screenshots:
  - https://marketplace-screenshots.githubusercontent.com/4554/c6fe0900-9088-11e9-9c7f-89f28baaed86?auto=webp&format=jpeg&width=670
  - https://marketplace-screenshots.githubusercontent.com/4554/dda46000-9088-11e9-9ccb-df1546dc6ac0?auto=webp&format=jpeg&width=670
  - https://marketplace-screenshots.githubusercontent.com/4554/f745a780-9088-11e9-8d3b-de11ec2d3980?auto=webp&format=jpeg&width=670
authors:
  - cyberhck
repository: fossapps/pr_label_enforcer
host: https://prlabelenforcer.cyberhck.now.sh/
stars: 4
updated: 2021-06-10 09:05:31 UTC
---
If you want to require certain labels before your PR can be merged, just enable this bot and add a config file under at `.github/pr_labels.yml` here's a sample config file:
```yaml
version: '1'
invalidStatus: "pending"
labelRule:
  endsWith:
    - "g"
  values:
    - "bug"
    - "enhancement"
```
