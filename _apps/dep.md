---
title: Dep
description: A dependency manager for your Pull Requests.
slug: dep
screenshots:
- https://github.com/z0al/dep/raw/master/docs/assets/comment.png
- https://github.com/z0al/dep/raw/master/docs/assets/status.png
authors:
- z0al
repository: z0al/dep
host: https://probot-dep.now.sh
stars: 51
updated: 2018-08-12 07:47:54 UTC
installations: 156
organizations:
- ant-design
- AvaloniaUI
- wp-cli
- Laravel-Backpack
- timvideos
- thefrontside
- tunnckoCoreLabs
- SymbiFlow
- decidim
- TECLIB
---

<p align="center">
  <img src="https://github.com/z0al/dep/raw/master/docs/assets/logo.png" width="256" height="256" alt="bot logo">
</p>

A dependency manager for your Pull Requests.

## Usage

1.  Browse to [GitHub Apps - dep][apps]
2.  Accept the permissions
3.  Allow access to repositories

If you want to update a pull request dependencies write:

![comment-screenshot][]

On the pull request, a status check from `dep` will appear:

![status-check-screenshot][]

For best results, enable branch protection (in the repository's settings) and require the `dep` status check to pass before merging:

![branch-protection-screenshot][]

[apps]: https://github.com/apps/dep
[status-check-screenshot]: https://github.com/z0al/dep/raw/master/docs/assets/status.png
[comment-screenshot]: https://github.com/z0al/dep/raw/master/docs/assets/comment.png
[branch-protection-screenshot]: https://github.com/z0al/dep/raw/master/docs/assets/settings.png

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<table>
<tr>
<th align="center"><a href="https://ahmed.sd"><img src="https://avatars1.githubusercontent.com/u/12673605?v=4" width="100px;" style="max-width:100%;"><br><sub><b>Ahmed T. Ali</b></sub></a><br><a href="https://goo.gl/sJKF5H" title="Blogposts"><g-emoji alias="memo" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dd.png" ios-version="6.0"><img class="emoji" alt=":memo:" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dd.png"></g-emoji></a> <a href="https://github.com/z0al/dep/commits?author=z0al" title="Code"><g-emoji alias="computer" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bb.png" ios-version="6.0"><img class="emoji" alt=":computer:" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bb.png"></g-emoji></a> <a href="https://github.com/z0al/dep/commits?author=z0al" title="Documentation"><g-emoji alias="book" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d6.png" ios-version="6.0"><img class="emoji" alt=":book:" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d6.png"></g-emoji></a> <a href="https://github.com/z0al/dep/commits?author=z0al" title="Tests"><g-emoji alias="warning" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/26a0.png" ios-version="6.0"><img class="emoji" alt=":warning:" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/26a0.png"></g-emoji></a></th>
<th align="center"><a href="https://github.com/JasonEtco"><img src="https://avatars1.githubusercontent.com/u/10660468?v=4" width="100px;" style="max-width:100%;"><br><sub><b>Jason Etcovitch</b></sub></a><br><a href="https://twitter.com/JasonEtco" title="Answering Questions"><g-emoji alias="speech_balloon" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ac.png" ios-version="6.0"><img class="emoji" alt=":speech_balloon:" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ac.png"></g-emoji></a> <a href="https://github.com/probot/ideas/issues/1" title="Ideas, Planning, &amp; Feedback"><g-emoji alias="thinking" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f914.png" ios-version="9.1"><img class="emoji" alt=":thinking:" height="20" width="20" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f914.png"></g-emoji></a></th>
</tr></table>

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Credits

The Logo is designed by [Freepik](https://www.freepik.com/free-vector/green-and-blue-retro-robots-collection_721192.htm). Modified by [Ahmed T. Ali](https://github.com/z0al).

Special thanks to [Jason Etcovitch](https://github.com/JasonEtco) for their help, including the original bot idea.

## License

MIT © [Ahmed T. Ali](https://github.com/z0al)
