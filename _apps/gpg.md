---
title: GPG
description: Enforce GPG signatures on pull requests
slug: gpg
screenshots:
- https://github.com/jarrodldavis/probot-gpg/raw/develop/docs/screenshot-success.png
- https://github.com/jarrodldavis/probot-gpg/raw/develop/docs/screenshot-failure.png
authors:
- jarrodldavis
repository: jarrodldavis/probot-gpg
stars: 14
updated: 2017-11-02 17:48:25 UTC
host: http://probot-gpg-production.herokuapp.com
installations: 13
organizations:
- saltstack
- twuni
- mattstratton
- nikolay
- jarrodldavis
- squid-lang
- eiwuert
---
## Usage

[Configure this app](https://github.com/apps/gpg) on your organizations and repositories. Be sure to enable [required status checks](https://help.github.com/articles/about-required-status-checks/) if you want to enforce GPG signatures on all pull requests.

## How it works

Git supports [signing commits with GPG keys](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work) to verify commit authorship beyond the easy-to-forge [author](https://git-scm.com/docs/git-commit#git-commit---authorltauthorgt) field.

GitHub supports [verifying GPG signatures on commits](https://github.com/blog/2144-gpg-signature-verification) and has an excellent [series of help articles](https://help.github.com/articles/signing-commits-with-gpg/) for creating a GPG key, using it with `git` locally, and linking it to a GitHub account.

After installation, this app [checks all commits](https://developer.github.com/v3/repos/commits/#compare-two-commits) of new (or newly updated) pull requests for valid GPG signatures [according to the GitHub API](https://developer.github.com/changes/2016-04-04-git-signing-api-preview/). Note that for the status check to be `success`, _every_ contributor of a pull request must:
- set up a GPG key on their local machine
- sign _all_ of their commits in the pull request with that key
- link that key with their GitHub account

![GPG status check success screenshot](https://github.com/jarrodldavis/probot-gpg/raw/develop/docs/screenshot-success.png "GPG status check success screenshot")

Otherwise, the app will set the status to `failure`.

![GPG status check failed screenshot](https://github.com/jarrodldavis/probot-gpg/raw/develop/docs/screenshot-failure.png "GPG status check failed screenshot")

## Email privacy

If you or any of your contributors use a [GitHub-provided `noreply` email address](https://help.github.com/articles/about-commit-email-addresses/) to keep a personal email address private, that `noreply` address should be used when creating a GPG key. Make sure that [`git`'s config is also using that `noreply` address](https://help.github.com/articles/setting-your-commit-email-address-in-git/) so that GitHub associates the GPG key correctly and validates it.

## Further reading

- [Git Tools - Signing Your Work](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)
- [GitHub Help: Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg/)
- [GitHub Help: Troubleshooting GPG](https://help.github.com/articles/troubleshooting-gpg/)
- [GitHub Blog: GPG signature verification](https://github.com/blog/2144-gpg-signature-verification)
- [GitHub Developer: Preview support for Git signing](https://developer.github.com/changes/2016-04-04-git-signing-api-preview/)
- [The GNU Privacy Guard](https://gnupg.org)
- [Setting up Git commit signing on macOS](https://gist.github.com/bmhatfield/cc21ec0a3a2df963bffa3c1f884b676b)
