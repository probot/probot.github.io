---
title: Semantic Pull Requests
description: Status check that ensures your pull requests follow the Conventional
  Commits spec
slug: semantic-pull-requests
screenshots:
- https://user-images.githubusercontent.com/2289/42729629-110812b6-8793-11e8-8c35-188b0952fd66.png
- https://user-images.githubusercontent.com/2289/42729632-11980b32-8793-11e8-9f8d-bf16c707f542.png
authors:
- zeke
- bkeepers
repository: probot/semantic-pull-requests
host: https://probot-semantic-pull-requests.herokuapp.com
stars: 173
updated: 2019-08-01 01:01:58 UTC
installations: 474
organizations:
- electron
- ant-design
- nuxt
- influxdata
- react-component
- material-components
- agalwood
- monicahq
- ethereum
- frappe
---

> GitHub status check that ensures your pull requests follow the Conventional Commits spec

Using [semantic-release](https://github.com/semantic-release/semantic-release)
and [conventional commit messages](https://conventionalcommits.org)? Install this
app on your repos to ensure your pull requests are semantic before you merge them. 

## How it works

Take this PR for example. None of the commit messages are semantic, nor is the PR title, so the status remains yellow:


<img width="580" alt="screen shot 2018-07-14 at 6 22 58 pm" src="https://user-images.githubusercontent.com/2289/42729630-11370698-8793-11e8-922c-db2308e0e98e.png">

<img width="791" alt="screen shot 2018-07-14 at 6 22 10 pm" src="https://user-images.githubusercontent.com/2289/42729629-110812b6-8793-11e8-8c35-188b0952fd66.png">

---

Edit the PR title by adding a semantic prefix like `fix: ` or `feat: ` or any other
[conventional commit type](https://github.com/commitizen/conventional-commit-types/blob/master/index.json). Now use `Squash and Merge` to squash the branch onto master and write a standardized commit message while doing so:

---

<img width="613" alt="screen shot 2018-07-14 at 6 23 11 pm" src="https://user-images.githubusercontent.com/2289/42729631-1164bd36-8793-11e8-9bf9-d2eeb9dd06e1.png">

<img width="785" alt="screen shot 2018-07-14 at 6 23 23 pm" src="https://user-images.githubusercontent.com/2289/42729632-11980b32-8793-11e8-9f8d-bf16c707f542.png">


## Installation

👉 [github.com/apps/semantic-pull-requests](https://github.com/apps/semantic-pull-requests)