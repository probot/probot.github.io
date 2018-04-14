## Contributing

[fork]: https://github.com/probot/probot.github.io/fork
[pr]: https://github.com/probot/probot.github.io/compare
[style]: https://github.com/standard/standard
[code-of-conduct]: CODE_OF_CONDUCT.md

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Please note that this project is released with a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.

## Submitting a pull request

0. [Fork][fork] and clone the repository
0. Configure and install the dependencies: `script/bootstrap`
0. Create a new branch: `git checkout -b my-branch-name`
0. Run the server: `script/server`
0. Make your changes
0. Push to your fork and [submit a pull request][pr]
0. Pat your self on the back and wait for your pull request to be reviewed and merged.

**Note:** on Windows, instead of `script/bootstrap` you'll need to run `bundle install` and `npm install`. Instead of `script/server`, you'll need to run `bundle exec jekyll serve`.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Follow the [style guide][style] which uses the standard linter.
- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

Work in Progress pull request are also welcome to get feedback early on, or if there is something blocked you.

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)

## Adding your app

You can add your app to the [website](https://probot.github.io/apps/) by creating a [new file in `_apps/`](https://github.com/probot/probot.github.io/new/master/_apps?filename=your-app-name.md) with this template:

```
---
# A human-friendly name of your listing
title: Title of Your app
# A short description of what your app does
description: What your app does
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: Shortened version of app name
# Include a few screenshots that show your app in action
screenshots:
- https://somewebsite.com/your-screenshot.png
# The GitHub usernames of anyone who authored the app
authors: [ your-username, other-usernames ]
# The repository where the code is located
repository: your-username/your-app
# The address where this app is deployed
host: https://my-probot-app.awesomecloudhost.com
---

Any documentation can go here. Many apps just use their README.md here.
```

## Requirements for apps

- Performs a useful action through the GitHub API that solves an existing problem for developers
- Is original: for example, it does something not already done by an existing probot app
- Has tests
- Has documentation
- Is open source
- Has a license
- Has a code of conduct
- Has someone willing to at least minimally maintain them for the near future
