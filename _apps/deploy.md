---
title: Deploy
description: Triggers a deployment event on GitHub based on pull request labels.
slug: deploy
screenshots:
- https://user-images.githubusercontent.com/2787414/44789192-3f4c1a00-ab9c-11e8-9093-353dfbe1bc1e.gif
authors:
- helaili
repository: helaili/deploy
host: https://probot-deploy-dotcom.vercel.app
stars: 20
updated: 2020-08-14 12:52:53 UTC
installations: 43
organizations:
- njzjz
- helaili
- suhanlee
- reedhhw
- frilox042
- thebookofeveryone
- BlueBaseJS
- logikinc
- pmanlukas
- BadIdeaFactory
---

This app uses GitHub's deployment API and triggers a deployment event when a matching label is applied to a Pull Request. 
Note that this app doesn't actually deploy anything, it just triggers a deployment request which will be forwarded to any webhook listening to the deploy event on your repo or on your organization. Check GitHub's [deployment API](https://developer.github.com/v3/repos/deployments/) for more information (this app would be the *Tooling* box on the sequence diagram). 

