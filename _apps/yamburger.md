---
title: YAMBURGER
description: Finds YAML syntax errors (or YAMBURGERS) on files changed in GitHub Pull
  Requests.
slug: yamburger
screenshots:
- https://urcomputeringpal.com/assets/yamburger.gif
authors:
- jnewland
- urcomputeringpal
repository: urcomputeringpal/yamburger
host: https://yamburger.now.sh
stars: 10
updated: 2018-09-08 13:41:00 UTC
installations: 8
organizations:
- urcomputeringpal
- redhat-developer
- justaprogrammer
- jnewland
- gofunky
- gr2m
---

## Getting started

The authors of YAMBURGER maintain a hosted version of the source code you see here that is free during a limited preview period. [Install it today!](https://github.com/apps/yamburger)

## Configuration

YAMBURGER supports validating YAML containing custom tags (like `!tag`). To configure the custom tags that are valid for your repository, add a `.github/yamburger.yaml` file to your repository like so:

```yaml
tags:
- name: tag1
  kind: scalar # strings / numbers
- name: tag2
  kind: sequence # arrays / lists
- name: tag3
  kind: mapping # hashes / dictionaries
```

An example configuration that adds support for [Home Assistant](https://home-assistant.io)'s [custom YAML tags](https://www.home-assistant.io/docs/configuration/yaml/#using-environment-variables) is available [here](https://github.com/jnewland/ha-config/blob/master/.github/yamburger.yaml).

## Questions?

Please [file an issue](https://github.com/urcomputeringpal/yamburger/issues/new/choose)! If you'd prefer to reach out in private, please send an email to pal@urcomputeringpal.com.

If you're interested in validating Kubernetes YAML, you should check out [kubevalidator](https://github.com/apps/kubevalidator)! It's kinda dope!
