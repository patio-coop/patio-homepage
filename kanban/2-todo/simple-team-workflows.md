Simple Team Workflows
=====================

It is necessary to reduce all complexity, dependencies and unnecessary
tooling in the architecture, process and deliverables in the project.

In addition easily downloadable, separate, easily installable and
appropriate workflow environments should be available from the repo for all
teams (design, content, and dev/devops, as well as staging and production
branches).

The staging and production branches will have deployment automation tools
for Vercel, Netlify, and/or independent hosting alternatives etc.

At the same time, the fantastic design work already created deserves a
modern software stack appropriate to its excellence, and itself capable of
growing as the success of the launched website grows. This will guarantee
the best results now, and allow us to change in the future without
constantly retooling.

So we will use (as a proposal in the starter-tw-npm branch over the next 15
days or so) a toolwind/next.js approach. And cherry pick among their
features and components, adapting our implementation to mainly incremental
(fast!) static site generation at a maximum.

And we will be prepared right from the getgo for a separation of concerns
between content creation, design, coding and devops. Since the use of the
Next.js framework allows either the continuation of static site generation
based on file system markdown files for content, or for the use of a
non-programmed database should the need arise.

And we can re-use the whole setup for future website and web application
projects of all kinds.
