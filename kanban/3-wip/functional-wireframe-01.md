# Hi-Fidelity Functional Wireframe Example 1. A proposal

## Overview

_created 2022-06-23 victorkane_

> Working on branch `starter-tw-npm`.

- [x] Review current design
- [ ] Review current design with design team members
- [ ] Create vanilla Next.js / Tailwind CSS starter according to [instructions in the docs](https://tailwindcss.com/docs/guides/nextjs)
- [ ] Skeleton header, first section and footer tailwind components
  - [ ] Skeleton header
  - [ ] Skeleton footer
  - [ ] Skeleton first section
  - [ ] Skeleton remaining sections
- [ ] Confirm Style Guide and setup as Tailwind theme
- [ ] Create Components for all sections
  - [ ] Markdown and image components to be imported into Section components in order to achieve separation of concerns and workflow in content, design, dev, devops
- [ ] Add initial hi-fidelity design characteristics to components
- [ ] Present this branch for project review as Pull Request

## Notes

> The implementation should be committed via atomic commits, so that each step of the process can be understood coherently.

## Conversation

### Ocjs 2022-06-23

BTW, I'd probably stick this in a `TODO.md` file in the repo; that has the advantage in keeping the info in "our" information, rather than a separate GitHub proprietary database that doesn't travel with the repo. That said, I'm not too fussed about this.

And, "atomic commits, so that each step of the process can be understood coherently," yes! If the commits tell a story as you read through them that is a fantastic aid to communication amongst developers!

👍 +1

😀

### victorkane 2022-06-24

In response to excellent suggestion, created kanban folder, with subdirs:

| kanban folder | purpose                                                |
| ------------- | ------------------------------------------------------ |
| 1-new         | new "creative" suggestions of all kinds and priorities |
| 2-todo        | prioritized backlog                                    |
| 3-wip         | what we're working on right now, kept to a minimum     |
| 4-mvp01       | tasks completed for current mvp                        |

All folders to be populated with `.md` files, which can be moved to different folders according to their kanban state. We'll keep this as simple as possible.

Great, no more github issues, which can be downloaded via the Github API, but are not accessible via repo, like the Github Wiki (which we'll only use if necessary)

And we will place references in the `TODO.md` files to actual commits as the tasks are completed, and/or otherwise acted upon.

### victorkane 2022-06-25

- planning

```bash
commit 33d45186a8aa9038e2204524bee8ea17a8e348a9 (HEAD -> starter-tw-npm, origin/starter-tw-npm)
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 11:30:57 2022 -0300

    docs(issues): updated planning

 README.md                               |  8 +++++---
 kanban/3-wip/functional-wireframe-01.md | 21 ++++++++++++++-------
 {prototype => static}/index.html        |  0
 3 files changed, 19 insertions(+), 10 deletions(-)
```

- Create vanilla Next.js / Tailwind CSS starter

```bash
commit 772906be366c9fc142a1e8086423b95e4bf6210e (HEAD -> starter-tw-npm, origin/starter-tw-npm)
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 12:32:48 2022 -0300

    build: created initial static page for no-tool viewing

 static/index.html                                | 18 ++----------------
 static/index_files/149b18973e5508c7.css          |  1 +
 static/index_files/27d177a30947857b.css          |  1 +
 static/index_files/_app-69da446bea935969.js      |  1 +
 static/index_files/_buildManifest.js             |  1 +
 static/index_files/_middlewareManifest.js        |  1 +
 static/index_files/_ssgManifest.js               |  1 +
 static/index_files/framework-7dc8a65f4a0cda33.js |  1 +
 static/index_files/index-89eb3f652d2ddf4f.js     |  1 +
 static/index_files/main-fc7d2f0e2098927e.js      |  1 +
 static/index_files/polyfills-5cd94c89d3acac5f.js |  1 +
 static/index_files/vercel.svg                    |  4 ++++
 static/index_files/webpack-69bfa6990bb9e155.js   |  1 +
 13 files changed, 17 insertions(+), 16 deletions(-)

commit b1c5a0d10fd2b03c8e4393f49bd8a450d8131bf4
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 12:11:53 2022 -0300

    build: Created vanilla next.js dev environment

 .eslintrc.json                          |    3 +
 .gitignore                              |   32 ++
 README-nextjs.md                        |   34 ++
 kanban/3-wip/functional-wireframe-01.md |    2 +
 next.config.js                          |    6 +
 package.json                            |   17 +-
 pages/_app.js                           |    7 +
 pages/api/hello.js                      |    5 +
 pages/index.js                          |   69 +++
 public/favicon.ico                      |  Bin 0 -> 25931 bytes
 public/vercel.svg                       |    4 +
 styles/Home.module.css                  |  116 ++++
 styles/globals.css                      |   16 +
 yarn.lock                               | 1665 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 14 files changed, 1974 insertions(+), 2 deletions(-)

commit d3c97a5c9e261e2b42166e7261a1004809d83409
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 11:54:21 2022 -0300

    build: initialize npm project

 package.json | 13 +++++++++++++
 1 file changed, 13 insertions(+)
```
