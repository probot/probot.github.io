---
title: Developer Certificate of Origin
description: Enforce the DCO on Pull Requests
slug: dco
screenshots:
  - https://user-images.githubusercontent.com/13410355/42352738-35f4e690-8071-11e8-9c8c-260e5868bfc8.png
  - https://user-images.githubusercontent.com/13410355/42352794-85fe1c9c-8071-11e8-834a-05a4aeb8cc90.png
  - https://user-images.githubusercontent.com/13410355/42352795-8617c052-8071-11e8-82f1-d9fbb2e9934c.png
  - https://user-images.githubusercontent.com/13410355/42352737-35da3d0e-8071-11e8-99ae-6e7068e257e1.png
stars: 201
authors:
  - bkeepers
  - hiimbex
repository: probot/dco
updated: 2021-07-07 20:11:27 UTC
host: https://probot-dco.herokuapp.com
organizations:
  - moby
  - prometheus
  - helm
  - hyperledger
  - nextcloud
  - pi-hole
  - src-d
  - fluent
  - gradle
  - envoyproxy
---


The Developer Certificate of Origin (DCO) is a lightweight way for contributors to certify that they wrote or otherwise have the right to submit the code they are contributing to the project. Here is the full [text of the DCO](https://developercertificate.org/), reformatted for readability:

> By making a contribution to this project, I certify that:
>
> (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
>
> (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
>
> (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.
>
> (d) I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.

Contributors _sign-off_ that they adhere to these requirements by adding a `Signed-off-by` line to commit messages.

```
This is my commit message

Signed-off-by: Random J Developer <random@developer.example.org>
```

Git even has a `-s` command line option to append this automatically to your commit message:

```
$ git commit -s -m 'This is my commit message'
```

Once installed, this integration will create a [check](https://developer.github.com/v3/checks/runs/) indicating whether or not commits in a Pull Request do not contain a valid `Signed-off-by` line.

Additionally, the DCO creates an override button accessible to only those with write access to the repository to create a successful check.

![DCO button](https://user-images.githubusercontent.com/13410355/42353254-3bfa266a-8074-11e8-80b4-18760c5efeee.png)
