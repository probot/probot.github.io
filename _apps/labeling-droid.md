---
title: Labeling Droid
description: Add a label automatically to know PR status at first glance.
slug: labeling-droid
screenshots:
- https://user-images.githubusercontent.com/1587053/34649116-d6f44b7a-f3eb-11e7-80b6-59e26d60c4d4.png
- https://user-images.githubusercontent.com/1587053/34649117-d8ca1d80-f3eb-11e7-86e1-db2427f6a5b2.png
- https://user-images.githubusercontent.com/1587053/34649118-de294544-f3eb-11e7-89ed-69a45cfa7792.png
authors:
- sotayamashita
stars: 0
repository: sotayamashita/labeling-dorid
updated: 2018-01-07 00:00:00 UTC
host: https://labeling-droid.glitch.me/
installations: 3
organizations:
---

Add a label automatically to know PR status at first glance.

## Motivation

In team development, pull request are getting increasing. In this situation, it is very hard to know **Is it work in progress?**, **Is it unreviewed?**, **Is it requested to change** or **Is it ready to ship?** at first glance. That way I created it. It will help you know PR status at first sight by adding label. It is deployed with [glitch](https://glitch.com) and its url is [https://labeling-droid.glitch.me/probot](https://labeling-droid.glitch.me/probot).

## How it works

It will add each label to know each question below:

- _"Is it work in progress?"_ - `N/A`

- _"Is it unreviewed?"_ - Add `PR: unreviewed` label if there are not reviews.
  <p>
    <img src="https://user-images.githubusercontent.com/1587053/34649116-d6f44b7a-f3eb-11e7-80b6-59e26d60c4d4.png" width="600"/>
  </p>

- _"Is it requested to change?"_ - Add `PR: reviewed-changes-requested` label if there is even one change request reviews.
  <p>
    <img src="https://user-images.githubusercontent.com/1587053/34649117-d8ca1d80-f3eb-11e7-86e1-db2427f6a5b2.png" width="600"/>
  </p>

- _"Is it ready to ship?"_ - Add `PR: reviewed-approved` label if there is **NOT** even one change request reviews.
  <p>
    <img src="https://user-images.githubusercontent.com/1587053/34649118-de294544-f3eb-11e7-89ed-69a45cfa7792.png" width="600"/>
  </p>

