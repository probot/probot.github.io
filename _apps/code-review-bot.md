---
title: Code review bot
description: A code review bot powered by ChatGPT
slug: cr-bot
screenshots:
  - https://user-images.githubusercontent.com/13167934/218536087-9c951161-88ca-42b4-8cef-0cc1cd62eff2.png
authors:
  - anc95
repository: anc95/ChatGPT-CodeReview
stars: 4338
updated: 2025-04-15 09:58:47 UTC
---


## Usage

### Install

Install: https://github.com/apps/cr-gpt;

### Configuration

1. Go to the <repo> you want integrate this bot
2. click `settings`
3. click `actions` under `secrets and variables`
4. Change to `Variables` tab, create a new variable `OPENAI_API_KEY` with the value of your open api key
<img width="1465" alt="image" src="https://user-images.githubusercontent.com/13167934/218533628-3974b70f-c423-44b0-b096-d1ec2ace85ea.png">

### Start using

1. The robot will automatically do the code review when you create a new Pull request, the review information will show in the tiemline / file changes part.
2. After `git push` update the pull request, cr bot will re-review the changed files

example:

https://github.com/anc95/ChatGPT-CodeReview/pull/21

<img width="1052" alt="image" src="https://user-images.githubusercontent.com/13167934/218999459-812206e1-d8d2-4900-8ce8-19b5b6e1f5cb.png">

## Self-hosting

1. clone code

2.
```sh
npm i
npm -i g pm2
npm run build
pm2 start pm2.config.cjs
```
