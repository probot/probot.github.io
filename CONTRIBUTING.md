## Contributing

[fork]: https://github.com/probot/probot.github.io/fork
[pr]: https://github.com/probot/probot.github.io/compare
[style]: https://github.com/probot/eslint-config-probot
[code-of-conduct]: CODE_OF_CONDUCT.md

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Please note that this project is released with a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.

## Submitting a pull request

0. [Fork][fork] and clone the repository
0. Configure and install the dependencies: `npm install`
0. Make sure the tests pass on your machine: `npm test`
0. Create a new branch: `git checkout -b my-branch-name`
0. Make your change, add tests, and make sure the tests still pass
0. Push to your fork and [submit a pull request][pr]
0. Pat your self on the back and wait for your pull request to be reviewed and merged.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Follow the [style guide][style] which is a custom eslint linter.
- Write and update tests.
- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

Work in Progress pull request are also welcome to get feedback early on, or if there is something blocked you.

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)

## Adding your app 

You can add your plugin by adding it as `_apps/your-plugin-name.md`

Here are the things you need to include about your plugin:

```
---
title: Title of Your App
description: What your App does
slug: Shortened version of app name
screenshots:
- https://somewebsite.com/your-screenshot.png
author: your-github-handle
repository: where your code is located (ie behaviorbot/welcome)
# Choose one or more of the below listed topics that you think describes what your app does
topics:
- administration
- code-review
- community-management
- licensing
- project-management

# All other stats fields you see on the website, will be grabbed as real data, such as organizations, installations, and stars.
---

Any documentation can go here. Many plugins just use their README.md here.

```

## Hosting your app

We will list un-hosted apps on the website to help gain more exposure. We will consider hosting apps on a case by case basis.

When considering hosting new plugins here's what we look for, the app:

- Works (ie it can run without errors and perform some sort of action on GitHub through the API)
- Does something not already done by an existing probot plugin
- Has minimal tests
- Has minimal documentation
- Is open source 
- Has a license
- Has a code of conduct
- Has someone willing to at least minimally maintain them for the near future