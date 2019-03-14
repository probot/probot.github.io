---
title: Review Uniquer
description: Suggests code fix ways that already fixed in the past
slug: review-uniquer
screenshots:
- https://raw.githubusercontent.com/Ikuyadeu/review-uniquer/master/img/Usage.gif?token=AH-0wuuMacNCXN86wKQdanxFaQod7FUFks5cMyaDwA%3D%3D
authors:
- Ikuyadeu
repository: Ikuyadeu/review-uniquer
host: https://evening-waters-63164.herokuapp.com/
---

# Review Uniquer

Review Uniquer suggests code fix ways that already fixed by human reviewers in past.

![screeenshot](https://raw.githubusercontent.com/Ikuyadeu/review-uniquer/master/img/Usage.gif?token=AH-0wuuMacNCXN86wKQdanxFaQod7FUFks5cMyaDwA%3D%3D)

## Usage

1. Install this app from https://github.com/apps/review-uniquer
2. Create `pattern.json` file in your repo, like bellow:
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

3. The developer(you) submits a pull request
4. This bot suggests source code changes based on pattern(If you does not have `pattern.json`, bot suggest based on [google and Microsoft pattern](https://github.com/Ikuyadeu/review-uniquer/blob/master/package.json)).

## Contributing


### Setup

```sh
# Install dependencies
npm install

# Run typescript
npm run build

# Run the bot
npm start
```

If you have suggestions for how another-code-reviewer could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2018 Yuki Ueda <ueda.yuki.un7@is.naist.jp> (ikuyadeu.github.io)

## Supported Language

* Python (Supported: default pattern is based on google and Microsoft)
* Java (TODO)
* Javascript (TODO)

## Pattern Detection Algorythm

Yuki Ueda, Takashi Ishio, Akinori Ihara, and Kenichi Matsumoto, “Mining Source Code Improvement Patterns from Similar Code Review Works”, In Proc. 13th International Workshop on Software Clones (IWSC’19), 2019 Peoples’ Choice Award [paper](https://ikuyadeu.github.io/papers/IWSC2019.pdf) : [slide](https://www.slideshare.net/YukiUeda4/mining-source-code-improvement-patterns-from-similar-code-review-works-133818790)

## Sponsor

We would like to thank the Support Center for Advanced Telecommunications (SCAT) Technology Research, Foundation.
This system was supported by JSPS KAKENHI Grant Numbers JP18H03222, JP17H00731, JP15H02683, and JP18KT0013.
