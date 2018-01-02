---
title: Template
description: Generate markdown templates for issues and pull requests.
slug: template
screenshots:
- https://user-images.githubusercontent.com/4994705/33142241-588e1f8e-cf7b-11e7-8e6d-73b355ac3a3a.gif
- https://user-images.githubusercontent.com/4994705/33141626-5dfc957e-cf79-11e7-9c37-42dd15c4d2db.gif
- https://user-images.githubusercontent.com/4994705/33139825-ff63b434-cf73-11e7-87c3-076007336a95.png
- https://raw.githubusercontent.com/liuderchi/gh-template-bot/master/docs/logo.png
authors:
- liuderchi
repository: liuderchi/gh-template-bot
host: https://gh-template-bot.herokuapp.com
---

<p align="center" >
  <a href="https://github.com/apps/template"><img height="72" src="https://raw.githubusercontent.com/liuderchi/gh-template-bot/master/docs/logo.png"></a>
</p>

# GitHub Template Bot

:robot: Generate *Markdown Templates* for different *Issues*, *Pull Requests* and even *Feature Requests*


## Usage

#### `/template issue`

open `.github/ISSUE_TEMPLATE.md` or a *[sample issue][issue]*

#### `/template pr`

open `.github/PULL_REQUEST_TEMPLATE.md` or a *[sample pull request][pr]*

#### `/template feature`

open *[a template to propose new feature][feature]*

#### `/template duplicate --num 23`

open custom [Handlebars Template][handlebarsjs], in this case `.github/duplicate.md` with `num` set to 23

for example, you've had `.github/duplicate.md` like [this][example]:

```markdown
<!-- .github/duplicate.md -->
😢 This is duplicate of #{{ withDefault __ "{{ num }}" }}.
```

I would say `😢 This is duplicate of #23.`

---

For latest features please visit [liuderchi/gh-template-bot](https://github.com/liuderchi/gh-template-bot)


## LICENSE

MIT license https://liuderchi.mit-license.org


[issue]: https://github.com/TalAter/open-source-templates
[pr]: https://raw.githubusercontent.com/stevemao/github-issue-templates/master/simple/PULL_REQUEST_TEMPLATE.md
[feature]: https://github.com/TalAter/open-source-templates
[handlebarsjs]: http://handlebarsjs.com/
[example]: https://github.com/liuderchi/gh-template-bot/blob/master/src/templates/duplicate.md
