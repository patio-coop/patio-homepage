Patio Interational Worker Co-operative Association Homepage
===========================================================

Contents
--------

`prototype/` contains a straight HTML/CSS/etc. version of the prototype
page. The static site generation system (to be added later) should produce
essentially the same output under the `output/` directory.

At <https://patio-coop.github.io/patio-homepage/prototype/> (on GitHub
Pages) we publish one branch of the repo. This is whatever branch a
developer happened to need to show to others at the time; feel free to
change it when you need it. (It's set by clicking on the _Settings_ tab and
then in _Pages_ in left sidebar.)


Developers
----------

For development help contact `@cjs_tng_jp` or `@yasu_tng_jp` on Patio
Mattermost chat, or anybody else in the `#homepage-technical` channel.
Design and content is done by the folks in the `#Community Landing Page`
group.

### Branches and Naming Conventions

There are two types of branches in this repo.

The `main` branch is the "consensus" branch; it's what we all agree is
suitable for release. (Currently we do not release to production, but
`main` is what will be released to production when we start doing that.)

The other type of branch is a "development" branch; these are created (and
owned) by individual developers for work in progress on features, bugfixes
or or anything else they're working one. Once these are reviewed they are
rebased on to the current tip of `main` and extend the `main` branch. (Note
that we don't do merge commits here because it makes the flow of
development harder to follow.)

Development branches are named `dev/DEVNAME/...`, where _DEVNAME_ indicates
which developer owns that branch and the remainder _..._ is up to the
developer. It usually indicates something about what work is going on on
that branch (e.g., `dev/manuel/html-css`) and may include a date indicating
when the branch was started (e.g., `dev/cjs/22h17/docs` for documentation
updates that were started on 2022-08-17, the `h` here indicating the 8th
month or August).
