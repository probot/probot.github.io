---
title: helPR
description: Assigns labels to issues based on the status of the PR associated with
  it.
slug: helpr
screenshots:
- https://raw.githubusercontent.com/rsarky/helpr/master/screenshots/usage-img1.jpg
authors:
- rsarky
repository: rsarky/helpr
host: https://evening-depths-50399.herokuapp.com
stars: 4
updated: 2018-04-20 09:11:34 UTC
installations: 5
organizations:
- Glavin001
- Unibeautify
---

<p align="center">
<h2 align="center">helPR</h2>
<p align="center">A GitHub App built with <a href="https://github.com/probot/probot">Probot</a> that assigns labels to issues based on the status of the PR associated with it.</p>
<p align="center"><a href="https://travis-ci.org/rsarky/helpr"><img src="https://travis-ci.org/rsarky/helpr.svg?branch=master" alt="Build Status"></a><a href="https://codecov.io/gh/rsarky/helpr">
  <img src="https://codecov.io/gh/rsarky/helpr/branch/master/graph/badge.svg" />
</a></p>


</div>

## Usage

Using helpr is pretty straightforward. Just [install](https://github.com/apps/helpr) the app on your repository and you are ready to go. :100: 


Consider this open issue :

![issue](https://raw.githubusercontent.com/rsarky/helpr/master/screenshots/usage-img2.jpg)
<br><br>

Now when someone references this issue in a pull request helpr will automatically add the label `pr-available` :

![labelled](https://raw.githubusercontent.com/rsarky/helpr/master/screenshots/usage-img1.jpg)
<br><br>


**helpr** supports 3 labels :
* `pr-available` when  a new PR referencing an issue is opened.
* `pr-merged` when a PR referencing an issue is merged.
* `pr-rejected` when a PR referencing an issue is rejected.

When a PR for an issue is merged or rejected **helpr** will remove the `pr-available` label and add the respective merged or rejected label.

## Configuring

You can choose label names as per your liking :smile:

Add a `helpr` object in your `.github/config.yml` file (and make the file if you don't already have it) like this:

```yaml
helpr:
  opened: 'insert-label-for-pr-opened-here'
  merged: 'insert-label-for-pr-merged-here'
  rejected: 'insert-label-for-pr-rejected-here'
```  

Only override the ones that you want to change!

The defaults are:
```yaml
opened: 'pr-available'
merged: 'pr-merged'
rejected: 'pr-rejected'
```
