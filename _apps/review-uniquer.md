---
title: Review Uniquer
description: Suggests code fix ways that already fixed in the past
slug: review-uniquer
screenshots:
- https://raw.githubusercontent.com/Ikuyadeu/review-uniquer/master/img/Usage.gif?token=AH-0wuuMacNCXN86wKQdanxFaQod7FUFks5cMyaDwA%3D%3D
authors:
- Ikuyadeu
repository: Ikuyadeu/review-uniquer
host: https://ikuyadeu-review-uniquer.glitch.me/probot
---

# Review Uniquer
![screeenshot](https://raw.githubusercontent.com/Ikuyadeu/review-uniquer/master/img/Usage.gif?token=AH-0wuuMacNCXN86wKQdanxFaQod7FUFks5cMyaDwA%3D%3D)

## Usage

1. Create `pattern.json` file in your repo, like bellow:
`trigger` is bad source code.
`code` is fix way of source code.

```json
[
    {
      "code": [
        "  self",
        "  .",
        "- assertFalse",
        "+ assertIn",
        "- in",
        "+ ,"
      ],
      "trigger": [
        "self",
        ".",
        "assertFalse",
        "in"
      ]
    },
    {
      "code": [
        "- itervalues",
        "+ values"
      ],
      "trigger": [
        "itervalues"
      ]
    }
]
```

2. The developer(you) submits a pull request
3. This bot suggests source code changes based on pattern(If you does not have `pattern.json`, bot suggest google and Microsoft pattern).

## Supported Language

* Python (Supported: default pattern is based on google and Microsoft)
* Java (TODO)
* Javascript (TODO)
