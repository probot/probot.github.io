---
title: In Solidarity
description: A GitHub bot to add status checks for inclusive language.
slug: in-solidarity
screenshots:
  - https://raw.githubusercontent.com/jpoehnelt/in-solidarity-bot/main/static/screenshot.png
authors:
  - jpoehnelt
repository: jpoehnelt/in-solidarity-bot
host: https://bot.in-solidarity.dev
stars: 21
updated: 2021-08-30 16:09:39 UTC
---

A GitHub bot to add status checks for inclusive language. 

> Note: The checks currently run on **public repositories**. This helps limit permissions for organizations with many repositories.

## Configuration

The level of rules can be modified using `.github/in-solidarity.yml`. Check the [sample configuration](https://github.com/jpoehnelt/in-solidarity-bot/blob/main/fixtures/in-solidarity.yml).

```yaml
rules:
  master:
    level: off
  slave:
    level: failure
ignore:
 - ".github/in-solidarity.yml"  # default
 - "**/*.yml"
```

The rule names are in [rules.ts](https://github.com/jpoehnelt/in-solidarity-bot/blob/main/src/rules.ts). Contributions are welcome!

## Badges
Share this app with one of the following badges.

```md
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat-square.png)](https://github.com/apps/in-solidarity)

[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-for-the-badge.png)](https://github.com/apps/in-solidarity)
```

[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat-square.png)](https://github.com/apps/in-solidarity)

[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-for-the-badge.png)](https://github.com/apps/in-solidarity)

## Why

> Complex and subtle configurations of sexist, racist, or ethnocentric language use in technical documents can derail or interfere with readers’ ability and desire to comprehend and follow important information.

Heather Brodie Graves & Roger Graves (1998) Masters, slaves, and infant mortality: Language challenges for technical editing, Technical Communication Quarterly, 7:4, 389-414, DOI: 10.1080/10572259809364639
