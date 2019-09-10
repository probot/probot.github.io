---
title: Dev Avatar
description: Suggests code fix ways that already fixed in the past
slug: dev-avatar
screenshots:
- https://raw.githubusercontent.com/Ikuyadeu/dev-avatar/master/img/Screenshot.png
authors:
- Ikuyadeu
repository: Ikuyadeu/dev-avatar
host: https://evening-waters-63164.herokuapp.com/
---
# Dev Avatar

Dev Avatar suggests code fix ways that already fixed by human reviewers in past.

<!-- ![screeenshot](https://raw.githubusercontent.com/Ikuyadeu/review-uniquer/master/img/Usage.gif?token=AH-0wuuMacNCXN86wKQdanxFaQod7FUFks5cMyaDwA%3D%3D) -->
![screeenshot](https://raw.githubusercontent.com/Ikuyadeu/dev-avatar/master/img/Screenshot.png)

* VS Code support is [here](https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.devreplay)

## Usage

1. Install this app from https://github.com/apps/dev-avatar
2. Create your own programming style(`devreplay.json`) on the root like bellow
(**Recommend**) [Review Pattern Generator](https://github.com/Ikuyadeu/review_pattern_gen) can generate your rule file automatically
```json
[
    {
        "condition": [
            "for $0 in xrange(${1:name}.$2):"
        ],
        "consequent": [
            "import six",
            "for $0 in six.moves.range(${1:name}.$2):"
        ],
    }
]
```
This mean if your code has `xrange`, it should be `six.moves.range`

And create your code(`hello.py`) like this.
```python
for a in xrange(array.x):
    pass
```
3. The developer(you) submits a pull request
4. This bot suggests source code changes based on pattern.

## Contributing


### Setup

```sh
# Install dependencies
yarn

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

* CPP
* Java
* JavsScript
* TypeScript
* Python
* Ruby

## Pattern Detection

Please use pattern detector.

https://github.com/Ikuyadeu/review_pattern_gen


## Thanks

This package is made based on
* [tslint](https://palantir.github.io/tslint/)
* [vscode-python](https://github.com/Microsoft/vscode-python/blob/master/src/client/language/tokenizer.ts)
* [vscode-textmate](https://github.com/microsoft/vscode-textmate)

We would like to thank the Support Center for Advanced Telecommunications (SCAT) Technology Research, Foundation.
This system was supported by JSPS KAKENHI Grant Numbers JP18H03222, JP17H00731, JP15H02683, and JP18KT0013.
