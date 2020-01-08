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
stars: 55
updated: 2018-08-12 07:47:54 UTC
installations: 185
organizations:
- ant-design
- AvaloniaUI
- wp-cli
- Laravel-Backpack
- google
- SymbiFlow
- timvideos
- thefrontside
- su2code
- decidim
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

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Credits

The Logo is designed by [Freepik](https://www.freepik.com/free-vector/green-and-blue-retro-robots-collection_721192.htm). Modified by [Ahmed T. Ali](https://github.com/z0al).

Special thanks to [Jason Etcovitch](https://github.com/JasonEtco) for their help, including the original bot idea.

## License

MIT © [Ahmed T. Ali](https://github.com/z0al)
