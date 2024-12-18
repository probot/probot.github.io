---
title: Repo Assistant AI
description: This GitHub App help maintainers identify and label duplicate
  issues automatically. Using the power of OpenAI's embeddings and Supabase's
  database, this app streamlines your workflow by finding similarities between
  issues. Also more features to come in the future!
slug: repo-assistant-ai
screenshots:
  - https://github.com/guillermoscript/repo-assistant/assets/52298929/bd364cae-cf70-4819-8294-47d5b0ca5007
  - https://github.com/guillermoscript/repo-assistant/assets/52298929/84ced6ae-dc65-4a74-9685-6db363e893cd
  - https://github.com/guillermoscript/repo-assistant/assets/52298929/0e10e581-3787-4e9e-93fb-1bc455e5a82e
  - https://github.com/guillermoscript/repo-assistant/assets/52298929/b0f9050c-9523-4680-ac56-a9dc1406722e
  - https://github.com/guillermoscript/repo-assistant/assets/52298929/4fabea1a-7bec-4923-a910-7515ed4ba210
authors:
  - guillermoscript
repository: guillermoscript/repo-assistant
stars: 29
updated: 2024-02-11 18:13:58 UTC
---

# Repo Assistant AI

Welcome to Repo Assistant AI! 🎉 This GitHub App is built with [Probot](https://github.com/probot/probot) and integrates [OpenAI](https://openai.com/) to help maintainers identify and label duplicate issues automatically. Using the power of OpenAI's embeddings and Supabase's database, this app streamlines your workflow by finding similarities between issues.



## Bot Usage

Currently, Repo Assistant AI is in its initial stages and operates locally. In the future, it will be ready for server deployment and will work across various repositories. For now, follow the steps below to get started, set up your own instance, and test it on your chosen repositories.


## Features

- [x] Sync existing issues
- [x] Find duplicate issues
- [x] Label duplicate issues
- [x] Work across repositories
- [x] Add labels to opened issues without labels, and a brief description on why it was labeled

### Prerequisites

- A GitHub account
- A Supabase account
- An OpenAI account

### Examples

[Duplicate Issue](https://github.com/guillermoscript/repo-assistant/issues/57)
[Original Issue](https://github.com/guillermoscript/repo-assistant/issues/13)
[New Unique Issue With labels added and comment](https://github.com/guillermoscript/repo-assistant/issues/53)
