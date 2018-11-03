---
title: Prosebot
description: What your app does
slug: prosebot
screenshots:
- https://user-images.githubusercontent.com/10660468/47381659-87844600-d6ce-11e8-8dc1-add68671dc85.png
authors: [ JasonEtco ]
repository: JasonEtco/prosebot
host: https://prosebot.now.sh
---

<p align="center">
  <img src="https://avatars2.githubusercontent.com/in/19534?s=128&v=4" width="64">
</p>
<h3 align="center">Prosebot</h3>
<p align="center"><a href="https://probot.github.io">Probot App</a> to help you write better on GitHub.<p>
<p align="center"><a href="https://travis-ci.com/JasonEtco/prosebot"><img src="https://badgen.net/travis/JasonEtco/prosebot" alt="Build Status"></a> <a href="https://codecov.io/gh/JasonEtco/prosebot/"><img src="https://badgen.net/codecov/c/github/JasonEtco/prosebot" alt="Codecov"></a></p>

## Usage

After [installing the GitHub App on your repos](https://github.com/apps/prosebot), this Probot App listens for changes to Markdown files (`.md`) or text files (`.txt`) and runs various checks against them to provide feedback on the English. Currently, the app checks for spelling, prose and inclusive verbiage. This is done by leveraging existing open source libraries, which you can find [listed below](#credits). Here's how it looks in action:

<p align="center">
  <img width="697" alt="image" src="https://user-images.githubusercontent.com/10660468/47381659-87844600-d6ce-11e8-8dc1-add68671dc85.png">
</p>

### What it checks

A non-exhaustive list of the various checks that are run:

* Correct spelling (and provides possible corrections).
* Use of non-inclusive/profane/offensive language.
* Various prose-related checks, find the full list [here](https://github.com/btford/write-good#checks).

### Installation

Visit [the installation page](https://github.com/apps/prosebot) and install the GitHub App on your repositories. That's all there is to it ❤️

### Configuration

There are currently three providers that the app uses to test your text. These can each be disabled, and are all enabled by default. To disable a provider, add a `.github/prosebot.yml` file to your repository and set the provider to `false`:

```yaml
# .github/prosebot.yml
writeGood: true
alex: true
spellchecker: true
```

### Credits

This Probot App is mostly a wrapper around existing open source libraries. The majority of the work is done by those, and they deserve a ton of thanks:

* [`write-good`](https://github.com/btford/write-good)
* [`alex`](https://github.com/get-alex/alex)
* [`node-spellchecker`](https://github.com/atom/node-spellchecker)

### Future work

* Using [Suggested Changes](https://blog.github.com/changelog/2018-10-16-suggested-changes/) to... suggest changes.
* Work on multiple PRs at a time
* Nicer annotations
* More providers? [Open an issue!](https://github.com/JasonEtco/prosebot/issues/new)
