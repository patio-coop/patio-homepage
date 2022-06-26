Formatting and Code/Writing Style
=================================


Commit Messages
---------------

A series of commit messages is read in three ways; and the series should
tell a coherent story at varying levels of detail regardless of the level
at which someone is reading it.

1. Summary: a list of just the summary lines (the first line of the commit
   message) of a series of commits.
   (`git log --graph --abbrev-commit --pretty=oneline --decorate=short`)
2. Full message: the full commit message and possibly the list of files
   that have been changed.
   (`git log --stat=999 --stat-graph-width=5 "$@"`)
3. Full commit with diff: included all the changes made to each file.
   (`git log --stat -p`)

We do not include information that's obvious from the existence of the
commit or metadata in the commit itself. E.g., saying a commit is an "edit"
is pointless: all commits edit files. The date and/or time of the commit is
included in the commit metadata, and so does not need to be included in the
commit message text.

The summary line of a commit message should start with a "marker" roughly
indicating what files or modules have been changed so that someone reading
just the summary lines knows what general area of code has been changed.
This should be kept as short as reasoanble (it can be just a directory name
if several files have been changed); it wasn't always even be necessary
or possible, depending on the change. Read through the commit log

Commits that have been reviewed by others should have a `Reviewed-by:`
line at the bottom listing the short names or nicknames of the reviewers.


Markdown
--------

Markdown documents in this repo are formatted to be as readable as possible
in a text editor in a standard terminal window.

- Wrap all lines no later than the 80th column (wrapping at 75 columns is
  reasonable).
- Make first- and second-level section titles prominent by using two
  leading blank lines before them and `===` and `---` under the titles.
- Code blocks should use four-space indentation, not triple-backticks.
- Not all markdown renderers support tables; use a code block instead.
  "ASCII-art" lines are optional. They may be either traditional ASCII
  (`---+---|`) or use Unicode line-drawing characters (`───┼───┤`).

As usual, read existing Markdown files in the repo to get a sense of the
formatting we use.
