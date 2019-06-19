---
title: Tests Checker
description: Requires writing the tests in Pull Requests.
slug: tests-checker
screenshots:
- https://user-images.githubusercontent.com/3725595/45590526-b7f3fa00-b942-11e8-972d-143c0b367017.png
authors:
- borNfreee
repository: infection/tests-checker
host: https://tests-checker.now.sh
stars: 23
updated: 2018-09-28 21:13:42 UTC
installations: 25
organizations:
- ant-design
- fastify
- mcollina
- infection
- chrisyue
- mimmi20
- njzjz
- maks-rafalko
- SantiMA10
- hemanth22
---

# Tests Checker

To install this bot to your Open Sourced project:

* open https://github.com/apps/tests-checker
* click "Install"
* choose the repository you want to install `tests-checker` to

<img width="990" alt="tests-checker" src="https://user-images.githubusercontent.com/3725595/45590526-b7f3fa00-b942-11e8-972d-143c0b367017.png">


## Settings

You can configure bot by adding `.github/tests_checker.yml` file to the repository and override any of the settings listed below.

Default values are:

```yaml
comment: 'Could you please add tests to make sure this change works as expected?',
fileExtensions: ['.php', '.ts', '.js', '.c', '.cs', '.cpp', '.rb', '.java']
testDir: 'tests'
```

where 

* `comment` - a text that bot will post when it won't find tests in the PR
* `fileExtensions` - extensions of the files that should be treated as a `source code`. Bot will do nothing if you just updating `README.md` because usually no tests are required to cover such change.
* `testDir` - folder, where tests are located. Make sure to set it correctly, otherwise bot will not be able to understand whether the test file was added or not.

If you want to change only directory where the tests are placed, just add `.github/tests_checker.yml`:

```yaml
testDir: app-tests
```

If you don't want to change anything, you can skip creating this file.

## Setup

This is needed if you want to deploy this bot to your server or want to contribute to it. Please note, that `tests-checker` is ready to use. You just need to install Github Application as mentioned in above.

```sh
# Install dependencies
npm install

# Run typescript
npm run build

# Run the bot for production or
npm start

# for development
npm run dev
```

## Deploy

Install `now`:

`npm install -g now`

Deploy:

```bash
now -e APP_ID=17064 \
     -e WEBHOOK_SECRET=XXX \
     -e PRIVATE_KEY_BASE64="$(cat ./key.pem | base64)"
```

Set a permanent alias for the new deployed application URL:

```bash
now alias set https://tests-checker-XYZ.now.sh https://tests-checker.now.sh
``` 

### Debugging `now.sh`

* `now ls tests-checker`
* `now inspect tests-checker.now.sh`
* `now rm tests-checker-qkkyxnelyo.now.sh` to free some instances available for OSS plan

## Contributing

If you have suggestions for how `tests-checker` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](https://github.com/infection/tests-checker/blob/master/CONTRIBUTING.md).

> A GitHub App built with [Probot](https://github.com/probot/probot) that require writing tests in Pull Requests.

## License

[ISC](https://github.com/infection/tests-checker/blob/master/LICENSE) © 2018 Maks Rafalko <maks.rafalko@gmail.com> (https://github.com/infection/tests-checker)
