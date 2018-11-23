---
title: Autorebase
description: Autorebase aims to make the Rebase Workflow enjoyable and keep master always green.
slug: autorebase
screenshots:
- https://raw.githubusercontent.com/tibdex/autorebase/d00a47fee13e621f5a3572f11567967e4b2c3718/assets/out-of-date.gif
- https://raw.githubusercontent.com/tibdex/autorebase/d00a47fee13e621f5a3572f11567967e4b2c3718/assets/suggested-change.gif
authors:
- tibdex
repository: tibdex/autorebase
host: https://autorebase.now.sh
---

## Usage

1.  :electric_plug: Install the publicly hosted [Autorebase GitHub App](https://github.com/apps/autorebase) on your repository.
2.  :closed_lock_with_key: [recommended] Protect the branches on which pull requests will be made, such as `master`. In particular, it's best to [enable required status checks](https://help.github.com/articles/enabling-required-status-checks/) with the "Require branches to be up to date before merging" option.
3.  :label: When you're ready to hand over a pull request to Autorebase, simply [add the `autorebase` label to it](https://help.github.com/articles/creating-a-label/).
4.  :sparkles: That's it! Pull requests with the `autorebase` label will then be rebased when their base branch moved forward ([`mergeable_state === "behind"`](https://developer.github.com/v4/enum/mergestatestatus/#behind)) and "rebased and merged" once all the branch protections are respected ([`mergeable_state === "clean"`](https://developer.github.com/v4/enum/mergestatestatus/#clean)).

### Demo

#### Rebasing a pull request with out-of-date status checks

![Rebasing a pull request with out-of-date status checks](https://raw.githubusercontent.com/tibdex/autorebase/d00a47fee13e621f5a3572f11567967e4b2c3718/assets/out-of-date.gif)

This pull request has two commits and targets the `master` branch. The `master` branch has a required status check that must be up to date before merging a pull request on it. After adding the `autorebase` label, Autorebase automatically rebases the pull request on top of `master`. The pull request's branch is now up to date with `master`. As soon as a new successful status check is added to the pull request's last commit, Autorebase merges the pull request.

---

#### Autosquashing a suggested commit

![Autosquashing a suggested commit](https://raw.githubusercontent.com/tibdex/autorebase/d00a47fee13e621f5a3572f11567967e4b2c3718/assets/suggested-change.gif)

Again, this pull request has two commits and targets the `master` branch. Here, a reviewer made a [suggested change](https://help.github.com/articles/incorporating-feedback-in-your-pull-request/#applying-a-suggested-change) on its first commit. We accept this suggestion and name the resulting commit "fixup! Addition". Where "Addition" is the subject of the first commit. After adding the `autorebase` label, Autorebase automatically rebases the pull request on top of `master`, [autosquashing](https://git-scm.com/docs/git-rebase#git-rebase---autosquash) the suggested commit with the first one. Autorebase will then merge the pull request. We can see that two commits (and not three!) have landed on `master` and that the diff of the "Addition" commit is the suggested one.

_Note_: We could also have named the fixup commit with the first commit's entire or abbreviated SHA. Meaning that "fixup! 00fac8d" would have worked too.
