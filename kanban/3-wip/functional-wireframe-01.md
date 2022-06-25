# Hi-Fidelity Functional Wireframe Example 1. A proposal

## Overview

_created 2022-06-23 victorkane_

> Working on branch `starter-tw-npm`.

- [x] Review current design
- [ ] Review current design with design team members
- [x] Create vanilla Next.js / Tailwind CSS starter according to [instructions in the docs](https://tailwindcss.com/docs/guides/nextjs)
- [ ] Skeleton header, first section and footer tailwind components
  - [x] Structure decoupled homepage and components
  - [ ] Skeleton header and navbar
    - [x] Skeleton navbar
    - [ ] Skeleton header
  - [ ] Skeleton footer
  - [ ] Skeleton first section
  - [ ] Skeleton remaining sections
- [ ] Confirm Style Guide and setup as Tailwind theme
  - [ ] fonts (Ubuntu)
  - [ ] colors
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
victor@victorpc:patio-homepage$ git log
commit 48107d7b319c3039c2a491a46fe6d65d51076fb4 (HEAD -> starter-tw-npm, origin/starter-tw-npm)
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 13:11:55 2022 -0300

    Create vanilla Next.js / Tailwind CSS starter

commit b9539532de7296b097b8be3df23ce3a4e70352eb
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 13:05:20 2022 -0300

    fix (static prototype): switched back to prototype for name of static output directory since static a reserved word for next

commit c55bd50f51ae3ba2770b2b0ce522630ce5afc840
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 12:43:15 2022 -0300

    fix (static html): beautified static document

commit d363c97fb20c1701c36fdf33024df80a3e18503c
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 12:37:11 2022 -0300

    docs (issue): added commit reference to task issue

commit 772906be366c9fc142a1e8086423b95e4bf6210e
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 12:32:48 2022 -0300

    build: created initial static page for no-tool viewing

commit b1c5a0d10fd2b03c8e4393f49bd8a450d8131bf4
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 12:11:53 2022 -0300

    build: Created vanilla next.js dev environment

commit d3c97a5c9e261e2b42166e7261a1004809d83409
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 11:54:21 2022 -0300

    build: initialize npm project
```

- Decoupled and responsive Navbar component rendered on home page with ITCC svg logo; changed to npm instead of yarn package manager

```bash
victor@victorpc:components$ git log --stat
commit b79c601383515f50604d6cbd9f31a69ce2f03288 (HEAD -> starter-tw-npm, origin/starter-tw-npm)
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 18:41:29 2022 -0300

    fix: consistent ITCC colors for mobile and for desktop breakpoint Navbar rendering

 components/Navbar.js | 6 +++---
 1 file changed, 3 insertions(+), 3 deletions(-)

commit f967f98a5f43a71af6c8504ee1b761246b1286de (HEAD -> starter-tw-npm, origin/starter-tw-npm)
Author: Victor Kane <victorkane@gmail.com>
Date:   Sat Jun 25 18:23:40 2022 -0300

    feat: decoupled navbar component rendered on home page with ITCC svg logo

 components/Navbar.js                    |  106 +++
 kanban/3-wip/functional-wireframe-01.md |    7 +-
 package-lock.json                       | 5955 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 package.json                            |    2 +
 pages/_app.js                           |    2 +-
 pages/_document.js                      |   16 +
 pages/index.js                          |   21 +-
 public/ITCC.svg                         |    3 +
 public/vercel.svg                       |    4 -
 yarn.lock                               | 1953 ---------------------------------------------
 10 files changed, 6109 insertions(+), 1960 deletions(-)
```
