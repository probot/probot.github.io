# probot.github.io

This is the home of probot.github.io, a website for [probot](https://github.com/probot/probot) documentation, apps, how-to guides and more.

## Documentation

The majority of documentation on the site is drawn from [the probot docs](https://github.com/probot/probot/blob/master/docs/). If you have requests for documentation additions to probot, please open an issue in [probot/probot](https://github.com/probot/probot), or if you want to add them yourself, feel free to open a pull request there.

## App Showcase

We also use this website to show off some of the cool probot apps built by the community. If you would like to have your app listed there, check out our [Contributing Guidelines](https://github.com/probot/probot.github.io/blob/master/CONTRIBUTING.md) for more information about what the requirements are to do that.

## Install and Usage

If you'd like to work on this repository, clone it. We use [Jekyll](https://jekyllrb.com/) to build the website, hosted on [GitHub Pages](https://pages.github.com/). We also use Git submodules to pull docs from the docs folder in  [probot/probot](https://github.com/probot/probot/tree/master/docs).

Once you've cloned this repo, run these commands in this directory:

```sh
# Only needed the first time:
$ script/bootstrap
# And each time you work locally:
$ script/server
# Below is the expected output:
Server address: http://127.0.0.1:4000
Server running... press ctrl-c to stop.
```

You should then be able to navigate to the server address, and see live edits you make render in your browser. You'll likely have to familiarize yourself with how Jekyll works to do larger edits, but it's worth the effort!

Another note: You can see more commands we use, such as our native build and server functions, in the [`script`](https://github.com/probot/probot.github.io/tree/master/script) folder. Go take a look!

## Contribute

We'd love to have you contribute! PRs are gladly accepted, and issues are also great. If you're thinking about a major PR, it would be better to open an issue first to talk about it.

If you're interested in contributing, check out our [contributing docs](CONTRIBUTING.md) to get started.

Want to get more involved with the Probot community? [Take a look at our community page](https://probot.github.io/community/)!

## License

This website is licensed [CC-BY-4.0](LICENSE). The Probot logo is licensed [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en). It was found on [wikimedia.org](https://commons.wikimedia.org/wiki/File:Robot-clip-art-book-covers-feJCV3-clipart.png) and is from clipartkid.com.
