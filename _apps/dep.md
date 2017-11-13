---
title: Dep
description: A dependency manager for your Pull Requests.
slug: dep
screenshots:
- https://github.com/ahmed-taj/dep/raw/master/docs/assets/comment.png
authors:
- ahmed-taj
repository: ahmed-taj/dep
host: https://dep.now.sh
---

<p align="center">
  <img src="https://github.com/ahmed-taj/dep/raw/master/docs/assets/logo.png" width="256" height="256" alt="bot logo">
</p>

A dependency manager for your Pull Requests.

## Usage

1. Browse to [GitHub Apps - dep][apps]
2. Accept the permissions
3. Allow access to repositories

If you want to update a pull request dependencies write:

![comment-screenshot][]

On the pull request, a status check from `dep` will appear:

![status-check-screenshot][]

For best results, enable branch protection (in the repository's settings) and require the `dep` status check to pass before merging:

![branch-protection-screenshot][]

[apps]: https://github.com/apps/dep
[status-check-screenshot]: https://github.com/ahmed-taj/dep/raw/master/docs/assets/status.png
[comment-screenshot]: https://github.com/ahmed-taj/dep/raw/master/docs/assets/comment.png
[branch-protection-screenshot]: https://github.com/ahmed-taj/dep/raw/master/docs/assets/settings.png

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/12673605?v=4" width="100px;"/><br /><sub><b>Ahmed T. Ali</b></sub>](https://ahmed.sd)<br />[📝](#blog-ahmed-taj "Blogposts") [💻](https://github.com/ahmed-taj/dep/commits?author=ahmed-taj "Code") [📖](https://github.com/ahmed-taj/dep/commits?author=ahmed-taj "Documentation") [⚠️](https://github.com/ahmed-taj/dep/commits?author=ahmed-taj "Tests") | [<img src="https://avatars1.githubusercontent.com/u/10660468?v=4" width="100px;"/><br /><sub><b>Jason Etcovitch</b></sub>](https://jasonet.co)<br />[💬](#question-JasonEtco "Answering Questions") [🤔](#ideas-JasonEtco "Ideas, Planning, & Feedback") |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Credits

The Logo is designed by [Freepik](https://www.freepik.com/free-vector/green-and-blue-retro-robots-collection_721192.htm). Modified by [Ahmed T. Ali](https://github.com/ahmed-taj).

Special thanks to [Jason Etcovitch](https://github.com/JasonEtco) for their help, including the original bot idea.

## License

MIT © [Ahmed T. Ali](https://github.com/ahmed-taj)
