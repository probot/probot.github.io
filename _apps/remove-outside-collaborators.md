---
title: Remove Outside Collaborators
description: Monitors and instantly removes any outside collaborators added to your
  Organization.
slug: remove-outside-collaborators
screenshots:
- https://user-images.githubusercontent.com/7875028/44161210-a17c2980-a08a-11e8-8adc-3ef69031d67c.png
authors:
- hollywood
repository: hollywood/remove-outside-collaborators
host: https://remove-outside-collaborators.herokuapp.com
stars: 10
updated: 2019-06-19 18:48:36 UTC
installations: 34
organizations:
- pivotal
- times
- LiveRamp
- telus
- Thezone1975
- OpenAIM
- TrapTeamCCNZ
- daddyfatstacksBIG
- ekimetrics
- RepublicServicesRepository
---

# Remove Outside Collaborators

Constant monitoring and instant removal of any Outside Collaborators added to your Organization.

## Features

- Will automatically remove any outside collaborators from an organization.
- Will create an issue in the repo explaining the action.
- Monitor only mode will not remove any collaborators but will still create an issue.
- Can set configuration parameters by using YAML file set in a specific repo for the entire org.
- Can exclude certain members so that they can be added as outside collaborators.
- Can set a list of users/groups to cc on every issue created

## Get Started

1. [Configure the App](https://github.com/apps/remove-outside-collaborators)
2. [Recommended] Create repo named `org-settings` and in it a file `.github/remove-outside-collaborators.yml` as described in the [How it Works](#How-it-Works) section to configure settings (and override defaults)
3. It will then prevent any outside collaborators (other than any whitelisted members) from being added to your organization.

## How it Works

By default when an Outside Collaborator is added to a Repository, an Issue will be created in the Repository with a warning that a Collaborator was added. [Monitor-Only mode is enabled by default].

A `.github/remove-outside-collaborators.yml` file in the Repository `org-settings` is recommended to override the [default settings](https://github.com/Hollywood/remove-outside-collaborators/blob/master/lib/defaults.js). This Repository will contain global settings for the Organization. You can name the settings Repository anything you'd like, `org-settings` is just the default.

```yml
# Configuration for Remove-Outside-Collaborators

# Turn on Monitor Mode [SET ON BY DEFAULT]. In this mode Collaborators are not removed, only an Issue is created
monitorOnly: true

# Enables detection and removal of any Outside Collaborator being added to the assigned repositories
enableCollaboratorRemoval: true

# Issue Title when an Outside Collaborator is added
removedIssueTitle: '[CRITICAL] An Outside Collaborator has been added to this Repository!'

# Issue Body when an Outside Collaborator is added
removedIssueBody: 'NOTE: Outside Collaborators are disabled for this organization! <br/> This member has been removed. Please contact an admin to override.'

# Issue Title when monitor mode is enabled
monitorIssueTitle: '[CRITICAL] Outside Collaborator Added'

# Issue Body when monitor mode is enable
monitorIssueBody: 'Please note that the adding of Outside Collaborators is prohibited!'

# Users/Groups that should be cc'ed on the issue. Should be users/groups separated by a space.
# ccList: '@user123 @user456'

# Collaborators to exclude in detection. Should be a List of Strings.
# excludeCollaborators: ['user1', 'user2']
```

When setting this up you can also set a number of Environment Variables

Possible Environment Variables:

- FILE_NAME [default: `.github/remove-outside-collaborators.yml`] - Sets the location/file name of the config yml file
- ORG_WIDE_REPO_NAME [default: `org-settings`] - Set the repo where to find the config yml file
