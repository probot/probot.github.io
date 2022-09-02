---
title: self-approval
description: A GitHub App built with Probot that allows Pull Request authors to
  self-approve their Pull Requests.
slug: self-approval
screenshots:
  - https://raw.githubusercontent.com/CubikTech/self-approval/main/screenshot.png
authors:
  - Cubik65536
repository: CubikTech/self-approval
host: https://self-approval.cubik65536.top
stars: 0
updated: 2022-09-01 07:11:57 UTC
---

> A GitHub App built with [Probot](https://github.com/probot/probot) that allows Pull Request authors to self-approve their Pull Requests.

![Screenshot](https://raw.githubusercontent.com/CubikTech/self-approval/main/screenshot.png)

> Special thanks to [dkhmelenko/autoapproval](https://github.com/dkhmelenko/autoapproval) for providing some inspiration and also some code implementation for this App.

## Introduction

For some repositories, the Pull Request have to be approved before it can be merged. And this GitHub App allows some whitelisted maintainers to self-approve their Pull Requests, so they can directly approve and merge their own Pull Requests.

## Setup

```sh
# Install dependencies
npm install

# Build the app
npm run build

# Run the bot
npm start

# Run tests, `npm run build` should be run first
npm run test
```

## Deploy

### Register the GitHub App

See [Deployment - Probot](https://probot.github.io/docs/deployment/#register-the-github-app)

### Deploy the app on a server

1. Clone the repository
2. Copy a file `.env` from the `.env.example` file and fill in the required values:
   - `APP_ID`: the ID of the app, which you can get from the [app settings page](https://github.com/settings/apps).
   - `GITHUB_CLIENT_ID`: the Client ID of the app, which you can get from the [app settings page](https://github.com/settings/apps).
   - `GITHUB_CLIENT_SECRET`: the Client Secret of the app, which you can generate and get from the [app settings page](https://github.com/settings/apps).
   - `WEBHOOK_SECRET`: the **Webhook Secret** that you generated when you created the app.
   - `PRIVATE_KEY`: the contents of the private key you downloaded after creating the app.
3. Run `npm install` to install the dependencies
4. Run `npm build` to build the app.
5. Run `npm start` to start the app.
6. Setup HTTPS and domain name for the app. You can use multiple ways to do this (e.g. Nginx & Certbot).

### Set the **Webhook URL**

Set the **Webhook URL** of your GitHub App to your domain or `ip:port`.

### Update the app

1. Pull the latest code from the repository.
2. Redo the steps 3 to 5 for deploying the app.

### Change the port

Go to the `.env` file and change the value of `PORT` to the port you want to use.

## Configuration

In order to use the bot, the config file should be provided. Config file should be defined in your repository. Config file is the yml file with the path `.github/self-approval-pull-request.yml`. And the file should have these 3 entries: `self_approval_comments`, `from_author` and `apply_labels`.

------

### self_approval_comments

Define the list of comments that will be considered as self-approval.

```yml
self_approval_comments:
  - "I self-approve!"
  - "I self-certify!"
```

------

### from_author

Define the list of GitHub users who can self-approve their Pull Request.

```yml
from_author:
  - "Cubik65536"
  - "<GitHub ID of other project maintainer>"
```

Assign an empty array if you want everyone can self-approve their Pull Requests (example: `from_author: []`).

------

### apply_labels

Defines the list of labels on PR, which should be added once PR was approved. For example:

```yml
apply_labels:
  - "can-be-merged"
  - "self-approved"
```

Assign an empty array if no labels should be applied to PRs (example: `apply_labels: []`).

------

## Contributing

If you have suggestions for how self-approval could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 Cubik Technology & Cubik65536
