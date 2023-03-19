---
# A human-friendly name of your listing
title: Copilot Survey Engine
# A short description of what your app does
description: This is an engine that will prompt developers on their perception of the use of Copilot.
# The slug of your hosted app on GitHub (https://github.com/apps/YOUR-SLUG)
slug: copilot-survey-engine
# Include a few screenshots that show your app in action
screenshots:
- https://copilotsurveyenginedocs.blob.core.windows.net/docs/Copilot Usage Screenshot.png
# The GitHub usernames of anyone who authored the app
authors: [ mageroni ]
# The repository where the code is located
repository: Mageroni-Org/copilot-survey-engine
# The address where this app is deployed
host: copilot-surveys.azurewebsites.net
---

# copilot-survey-engine

> A GitHub App built with [Probot](https://github.com/probot/probot) that Engine to prompt developers about their experience with Copilot!

## App Objective

As more companies adopt Copilot, there's an increasing need to measure the benefits in the organization. For such it is important to have in mind not only to do a quantitative analysis, but also qualitative. Combining quantitative and qualitative analysis is crucial in understanding the developer experience when using a tool. While quantitative analysis can provide valuable insights into usage patterns, adoption rates, and other measurable data, it doesn't tell the full story of how developers feel about a tool. Specially taking into consideration that there's many ways to interact with Copilot and get value from it, but not all of these are possible to be captured in KPIs as of now. 

To gain a deeper understanding of user satisfaction, a qualitative survey is key. This app intends to help companis on that journey, so we can start with 3 basic questions and integrate them in the very tool, so it's also part of the DevOps lifecycle. This information is hosted on a database so it can provide insight into how developers are using the tool, what value they're perceiving to receive and challenges that have been presented.

I hope you can get value from this project and feel free to contribute and build on top of this!

## How it works

The App listens on 3 main events: Pull Request closed, issue edited and issue comment created. Once a Pull Request has been closed, the workflow will trigger and create an issue asking the identified survey questions. We are able to support English, Spanish and Portuguese, so the engine will do a language analysis on the description of the Pull Request to try to match the same language in the issue creation. 

Once the issue is created, the following questions are presented to the developer:

Hi! 👋 As part of our efforts to continually improve our DevOps processes, we would like to gather your valuable feedback on your experience with Copilot for Pull Request #XXX by asking the following questions:

Did Copilot save time or increase productivity in developing this component?
 Yes
 No
If answer 1 is Yes, how much was the improvement (5%, 10%, 20%, 30% or more)?
 <5%
 5%-10%
 10%-20%
 20%-30%
 >30%
If answer 1 is No, please explain why in a comment

As we receive edits on the issue, the App will validate the responses received (options selected) and once all questions have been answered, the issue will be closed automatically and the responses will be saved into a database. A report could be connected to this aplication or you can even decide to host your own your database!

## Setup. To use as-is

You only need to install this App on your Org/Repos

## Setup. To deploy on your own environment

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

As a first time execution probot will prompt you for creating a new GitHub App or connect it with an existing App. As you complete that information a .env file will get created in your local source code and all the private information regarding your GitHub App will be automatically written there. 

## Docker

```sh
# 1. Build container
docker build -t copilot-survey-engine .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> copilot-survey-engine
```

## Contributing

If you have suggestions for how copilot-survey-engine could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Mabel Geronimo
