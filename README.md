Patio Interational Worker Co-operative Association Homepage
===========================================================

### Contents

`prototype/` contains a straight HTML/CSS/etc. version of the prototype
page. The static site generation system (to be added later) should produce
essentially the same output under the `output/` directory.

At <https://patio-coop.github.io/patio-homepage/prototype/> (on GitHub
Pages) we publish one branch of the repo. This is whatever branch a
developer happened to need to show to others at the time; feel free to
change it when you need it. (It's set by clicking on the _Settings_ tab and
then in _Pages_ in left sidebar.)

### Developers

For development help contact `@cjs_tng_jp` or `@yasu_tng_jp` on Patio
Mattermost chat, or anybody else in the `#homepage-technical` channel.
Design and content is done by the folks in the `#Community Landing Page`
group.

Information about naming and other code conventions is in the [`STYLE.md`]
document.

Suggested Development Guideline as of Oct 13, 2022
==================================================
[Below is copied from our
chat](https://patio.ica.coop/chat/tech-coops/pl/upna7f8ik7b1fcpw549mxy5sre)

### Some assumptions before going to the commands
1) The branch that contains the latest version agreed as valid by everyone
   is the main branch.
2) Whenever you take a new issue, you must create a new branch starting from
   main with the following name:
   "dev/your_name/something_that_identifies_issue".
3) Whenever you work on your issue, please make sure to update your branch
   daily with the latest version of main.
4) When you finish the issue (or while working on it), push everything to a
   remote branch with the same name.
5) Lastly, create a pull request and assign it to a teammate.

We agree on this procedure with those we are working on the project and we
will test it for one or two sprints and evaluate if we are comfortable or
not.

### What we agreed is that typically, we expect that if you are going to start
working on an issue, you do something like this (or similar). Open the
command line and type:

1) $ `git status` => It will tell you the status of your current branch,
make sure you are standing on your issue branch or main branch.

2) $ `git pull` => Pull everything from origin. "git pull origin main" for
example updates the branch I'm standing on with the latest from main, this
is to keep my copy of main up to date or my issue branch up to date with the
changes from main.

3) $ `git checkout` -b "dev/your_name/something_that_identifies_issue" =>
always check before running this command that you are standing on main using
"git status".

4) $ `git add "filename"` => Add the file to the list of changed files ready
to be committed. Make sure you add the changes you want to commit, avoid
doing bulk actions (like doing "git add .", please don't do it unless you
are sure about it)

5) $ `git commit -m "descriptive message"` => Please use a descriptive
message. This action will commit the changes added with the "git add"
statement above. Try not to make commits with many unrelated changes, it is
advisable to make commits "with a certain logic", for example, if we are
creating reusable components and then we will implement them, maybe it is a
good idea to create them, make the commit and then implement them and make
another commit. In this way we avoid huge commits where it is not easy to
identify the changes.

6) $ `git pull origin main` => Before doing a push of the local commits, it
is a good practice to do a pull to make sure that there will be no conflicts
when the commits are merged with main.

7) $ `git push origin dev/your_name/something_that_identifies_issue` => this
will create the branch of my issue in origin for others to see. Did you
finish the issue? => Create a PR by going to the following address:
https://github.com/patio-coop/patio-homepage/pulls


The way you type the commands may vary, in fact some may use a graphical
environment to do these steps. What we care about is to show the sequence
and make sure that we work in an orderly manner. The idea of the PR is that
we have an excuse to chat with each other and read each other's code so we
continue to learn and interact with each other. If it becomes too laborious,
we will switch to another methodology.

From tomorrow the coffee-shop branch will be merged with main and we will be
able to start using this methodology.

That's all, sorry for the long message!
* [GitHub](https://github.com/patio-coop/patio-homepage/)
* [Trello](https://trello.com/b/UmETQtyW/patio-homepage-development-issues)

## FIGMA
https://www.figma.com/file/P0vtqF4VtOkKEM6L0nWh5h/PATIO?node-id=240%3A439



<!-------------------------------------------------------------------->
[`STYLE.md`]: ./STYLE.md
