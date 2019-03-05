# Contribute to

The following rules will make easier to review PR's. Please, follow them so we all can have a better developer experience.

Thank you!

## Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally
- Consider starting the commit message with an applicable emoji:
  - 🎨 when improving the format/structure of the code
  - 🏇 when improving performance
  - 📝 when writing docs
  - 🚀 when adding new feature
  - 🐛 when fixing a bug
  - 🔥 when removing code or files
  - ⚙️ when refactoring code
  - 💚 when fixing the CI build
  - ✅ when adding tests
  - 🆕 when added new dependencies
  - ⬆ when upgrading dependencies
  - ⬇ when downgrading dependencies
  - 🗑️ when removing dependencies
  - 👕 when removing linter warnings

## CI Configuration

### Skip CI

When is not necessary to execute the CI in a commit it needs be added `[ci skip]` to the commit description or title.

## Installation

This project uses [Yarn](https://yarnpkg.com/en/) to manage this repo.

### Minimum requirements

- NodeJS 8 or superior.
- Yarn latest stable.

### How to create a new Pull Request (PR)

1. Fork the repo: https://help.github.com/articles/fork-a-repo/
2. Clone your new forked repo in your computer.
3. `git checkout -b new_branch_name`. Replace `new_branch_name` with the name you like.
4. Make your changes.
5. Commit your changes.
6. Push your changes (the first time, git will ask you if you want to create the new branch remotely).
7. Create the PR: https://help.github.com/articles/creating-a-pull-request-from-a-fork/

Things to take into account:

- PR's don't have to be merged by themself. The user with merge permissions will do it once the PR is approved.
- Don't use your master branch (from your fork). Instead: Develop your PR in there. Why?

  > You do not want to issue pull requests from your fork’s master branch on Github.com to the parent repisitory because any new changes you add to the master branch will automatically show up in the pull request. That means changes you did not intend to be there, would now be there.
  >
  > https://blog.jasonmeridth.com/posts/do-not-issue-pull-requests-from-your-master-branch/
