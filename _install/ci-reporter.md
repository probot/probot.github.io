---
title: CI Reporter
description: Pastes the error output of a failing build into the relevant PR.
slug: ci-reporter
screenshots:
- https://user-images.githubusercontent.com/10660468/36135324-78809222-1058-11e8-99cd-6cc100971066.png
authors:
- JasonEtco
repository: JasonEtco/ci-reporter
host: https://ci-reporter-etc.herokuapp.com
stars: 32
updated: 2018-04-05 14:17:13 UTC
installations: 21
organizations:
- probot
- gillesdemey
- ahmadnassri
- timvideos
- tunnckoCore
- electron
- nice-registry
- Unibeautify
- im-tomu
- mithro
---


## Configuration

You don't need any configuration for this to work in your project but you can customize a few things to fit your needs. You can create a `.github/ci-reporter.yml` file:

```yml
# Set to false to create a new comment instead of updating the app's first one
updateComment: true

# Use a custom string, or set to false to disable
before: "✨ Good work on this PR so far! ✨ Unfortunately, the [{{ provider }} build]({{ targetUrl }}) is failing as of {{ commit }}. Here's the output:"

# Use a custom string, or set to false to disable
after: "I'm sure you can fix it! If you need help, don't hesitate to ask a maintainer of the project!"
```

## Does it work with _____?

**ci-reporter** currently supports TravisCI and CircleCI. If you're interested in seeing support for another CI tool, please [open an issue](https://github.com/JasonEtco/ci-reporter/issues/new)!

# Deploying

If you would like to run your own instance of this plugin, see the [docs for deploying plugins](https://github.com/probot/probot/blob/master/docs/deployment.md).
