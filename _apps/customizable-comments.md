---
title: Customizable Comments
description: Auto-replies with customizable comments based on template vars
slug: probot-cc
screenshots:
  - https://github.com/tizmagik/customizable-comments/raw/a8fe5d59a127040ab6842dbf2c681e7690970544/public/probot-cc-sample.png
authors:
  - tizmagik
repository: tizmagik/customizable-comments
host: https://probot-cc.vercel.app
stars: 1
updated: 2021-08-10 20:48:02 UTC
---

## Configuration options

_📒 Currently, this Probot App only supports `pull_request.opened` events._

_I would be happy to add more, just submit a PR or Issue with what you'd find useful._

### Built-in template vars

| name               | value                                                                                                            | used when      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | -------------- |
| \$BRANCH           | The branch name of the PR                                                                                        | `pull_request` |
| \$BRANCH_SANITIZED | The branch name of the PR but sanitized as safe for URL prefixes (lowercased, `.` and `/` are replaced with `-`) | `pull_request` |

### Custom template vars

You can configure your own variable replacements using the `vars:` block in the yml file. See the example below:

## Example

```yaml
vars:
  - name: $MY_CUSTOM
    value: my-value

pull_request:
  opened:
    template: |
      Here's a helpful URL based on the branch name: https://$BRANCH.something.example.com
      And here's my custom value: $MY_CUSTOM
```

The above will auto-reply with a comment like so:

```
Here's a helpful URL based on the branch name: https://the-branch.something.example.com
And here's my custom value: my-custom
```
