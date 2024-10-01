---
title: self-approval
description: A GitHub App built with Probot that allows Pull Request authors to
  self-approve their Pull Requests.
slug: self-approval
screenshots:
  - https://raw.githubusercontent.com/self-approval/app/main/screenshot.png
authors:
  - Cubik65536
repository: self-approval/app
stars: 4
updated: 2024-07-26 23:41:31 UTC
---

> A GitHub App built with [Probot](https://github.com/probot/probot) that allows Pull Request authors to self-approve their Pull Requests.

![Screenshot](https://raw.githubusercontent.com/self-approval/app/main/screenshot.png)

> Special thanks to [dkhmelenko/autoapproval](https://github.com/dkhmelenko/autoapproval) for providing some inspiration and also some code implementation for this App.

## Introduction

For some repositories, the Pull Request have to be approved before it can be merged.

This GitHub App allows some whitelisted repository maintainers to self-approve their Pull Requests, so they can directly approve and merge their own Pull Requests.

## Local Setup / Server Deployment

Install dependencies

```
npm install
```

Build the project

```
npm run build
```

Start the server

```
npm start
```

Follow the instructions to register a new GitHub app.

Configure the app in the `.env` file by following the following instructions

### Configuration

1. Copy the `.env.example` file to `.env`
2. Fill in the following values according to the following descriptions:
    - `APP_ID`: the ID of the app, which you can get from the [app settings page](https://github.com/settings/apps).
    - `GITHUB_CLIENT_ID`: the Client ID of the app, which you can get from the [app settings page](https://github.com/settings/apps).
    - `GITHUB_CLIENT_SECRET`: the Client Secret of the app, which you can generate and get from the [app settings page](https://github.com/settings/apps).
    - `WEBHOOK_SECRET`: the **Webhook Secret** that you generated when you created the app.
    - `PRIVATE_KEY`: the contents of the private key you downloaded after creating the app.
3. \[OPTIONAL\] Change the `PORT` to the port you want the app to listen to.
4. \[OPTIONAL\] Setup HTTPS and domain name for the app. You can use multiple ways to do this (e.g. Nginx & Certbot).
5. Set the **Webhook URL** of your GitHub App in the app settings page to the `WEBHOOK_URL` you configured in the `.env` file.

### Update the app

If you want to update the app that is deployed on your server, you can follow the following steps:

1. Stop the server
2. Pull the latest changes from the repository
3. Rerun the npm commands shown above

## Deploy to Vercel

This app can be continuously deployed to [Vercel](https://vercel.com/) using the [Vercel GitHub app](https://github.com/apps/vercel).

### Deploying

1. You have two options to begin with:
    - Click the following link to deploy this app to Vercel: [Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fself-approval%2Fapp&env=APP_ID,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,WEBHOOK_SECRET,PRIVATE_KEY&project-name=self-approval-app&repository-name=self-approval-app)
    - Fork this repository and deploy it manually to Vercel following the [Vercel documentation](https://vercel.com/docs/git#deploying).
2. Fill the following environment variables according to the following descriptions:
    - `APP_ID`: the ID of the app, which you can get from the [app settings page](https://github.com/settings/apps).
    - `GITHUB_CLIENT_ID`: the Client ID of the app, which you can get from the [app settings page](https://github.com/settings/apps).
    - `GITHUB_CLIENT_SECRET`: the Client Secret of the app, which you can generate and get from the [app settings page](https://github.com/settings/apps).
    - `WEBHOOK_SECRET`: the **Webhook Secret** that you generated when you created the app.
    - `PRIVATE_KEY`: the contents of the private key you downloaded after creating the app.
3. \[OPTIONAL\] Set the URL of your Vercel app if you want to use a custom domain.
4. Set the **Webhook URL** of your GitHub App in the app settings page to `https://<your-vercel-app-url>/api/github/webhooks`.

### Update the app

If you want to update the app that is deployed on Vercel, you can follow the following steps:

- If you used the above link to deploy the app
  1. Go to the [Vercel dashboard](https://vercel.com/dashboard) and select the app you deployed
  2. Click on the `Git Repository` button to go the the GitHub repository
  3. Delete the repository
  4. Redeploy the app using the above guide
- If you forked the repository and deployed it manually
  1. Go to the [Vercel dashboard](https://vercel.com/dashboard) and select the app you deployed
  2. Click on the `Git Repository` button to go the the GitHub repository
  3. Sync from the upstream repository
  4. Wait for the Vercel to automatically redeploy the app

### Considerations

- Vercel [expects to find your lambda functions under `/api` folder]([url](https://vercel.com/docs/concepts/functions/serverless-functions#deploying-serverless-functions)). Make sure your functions are placed there and double check Vercel detected your Lambda Functions during the deployment process by checking the logs:

![image](https://user-images.githubusercontent.com/2574275/187179364-b0019f95-be41-462a-97d5-facf4de39095.png)

### How it works

The [api/github/webhooks/index.ts](api/github/webhooks/index.ts) file is handling requests to `POST /api/github/webhooks`, so make sure to configure your GitHub App registration's webhook URL accordingly.

## Configure GitHub Repository

In order to use the bot, the config file should be provided. Config file should be defined in your repository. Config file is the yml file with the path `.github/self-approval-pull-request.yml`. And the file should have these 3 entries: `self_approval_comments`, `from_author` and `apply_labels`.

### self_approval_comments

Define the list of comments that will be considered as self-approval.

```yml
self_approval_messages:
  - "I self-approve!"
  - "I self-certify!"
```

### from_author

Define the list of GitHub users who can self-approve their Pull Request.

```yml
from_author:
  - "Cubik65536"
  - "<GitHub ID of other project maintainer>"
```

Assign an empty array if you want everyone can self-approve their Pull Requests (example: `from_author: []`).

### apply_labels

Defines the list of labels on PR, which should be added once PR was approved. For example:

```yml
apply_labels:
  - "can-be-merged"
  - "self-approved"
```

Assign an empty array if no labels should be applied to PRs (example: `apply_labels: []`).

## License

[ISC](LICENSE) © 2022-2024 iXOR Technology & Cubik65536
