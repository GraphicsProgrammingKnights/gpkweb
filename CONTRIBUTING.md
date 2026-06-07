# Contributing to GPK Web

Welcome to the GPK dev team. This guide walks you through getting set up, how to pick up work, and how to ship your first change.

If anything here is unclear, ask in `#dev-general`. That's also the right place to ask any general dev question, keeping questions in the channel means everyone learns from the answer.

---

## Where to ask for help

- **Discord `#dev-general`** — general dev questions, getting unblocked, sharing progress: <https://discord.com/channels/1382815285974929418/1509283076390523010>
- **Discord `#web-dev`** — web-project-specific coordination
- **GitHub PR comments** — for feedback on a specific change

Default to asking in Discord publicly rather than DMing; public questions help the rest of the team learn.

---

## Setting Up Your Environment

### Prerequisites

- **Node.js 20+** (LTS — version pinned in `.nvmrc`)
- **npm** (ships with Node)
- **Git**
- **Docker** *(optional — only needed if you want to test the production build locally)*

### Clone and install

```bash
git clone https://github.com/GraphicsProgrammingKnights/gpkweb
cd gpkweb
```

If you use [nvm](https://github.com/nvm-sh/nvm), pick up the right Node version automatically:

```bash
nvm install   # installs the version in .nvmrc
nvm use       # switches to it
```

Then install dependencies:

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Open <http://localhost:3000>. The dev server hot-reloads — save a file and the browser updates.

### Lint and build (run these before opening a PR)

```bash
npm run lint    # checks code style and catches common bugs
npm run build   # full production build — must succeed for CI to pass
```

CI runs both of these on every PR. If they fail locally they will fail in CI.

---

## How to Find Work

1. **Check the [Notion](https://app.notion.com/p/graphicsprogrammingknights/Dev-Team-8b64589a9ffa82cb9dc50100141e9f5d?source=copy_link)**. Tasks are listed there with descriptions, priority, and status.
2. **Claim a task** by assigning it to yourself on Notion. This avoids two people doing the same work.
3. **If you're not sure what to pick up**, ask in `#web-dev` — The Dev Lead or one of the Admins can suggest something matched to your skill level.

---

## How to PR

A walkthrough of the full workflow, top to bottom. Follow this for every change.

### 1. Start from an up-to-date `main`

```bash
git checkout main
git pull
```

### 2. Create a feature branch

Branch names follow this pattern: `<type>/<short-description>` (kebab-case).

```bash
git checkout -b feature/team-section
```

See the [Branch Naming](#branch-naming) table below for the full list of types.

### 3. Make your change

Keep it focused on one thing. A PR that does "add team section + fix navbar bug + bump a dependency" is harder to review than three small PRs.

### 4. Test locally

Run the dev server and click through what you changed. If it's a UI change, check both mobile and desktop widths (Chrome DevTools → device toolbar).

Then run lint and build:

```bash
npm run lint
npm run build
```

### 5. Commit

Commit messages follow the same `<type>: <description>` pattern as branch names. See [Commit Convention](#commit-convention) below.

```bash
git add <files-you-changed>
git commit -m "feat: add team section to homepage"
```

Prefer `git add <file>` over `git add .` so you don't accidentally commit something you didn't mean to.

### 6. Push and open the PR

```bash
git push -u origin feature/team-section
```

Then go to the [GitHub repo](https://github.com/GraphicsProgrammingKnights/gpkweb), click "Compare & pull request," fill out the PR template, and submit.

### 7. Wait for CI and review

- **CI** (lint + build + Docker build) runs automatically. Green check = all good. Red X = click into it, find the error, fix it, push again — CI will re-run.
- **Review** — Sebastian, Stevin, and Alejandro are auto-requested via CODEOWNERS. You need at least one approval before merging.
- **Respond to review comments** by either making the change requested or replying in the PR with why you disagree. Both are valid — review is a conversation.

### 8. Merge

Once approved and CI is green, use **"Squash and merge"** (not regular merge). This keeps the `main` branch history clean — one commit per PR.

After merge, delete the branch (GitHub will offer a button).

---

## Branch Naming

| Type       | When to use                                  | Example                          |
|------------|----------------------------------------------|----------------------------------|
| `feature/` | A new feature or section                     | `feature/team-section`           |
| `fix/`     | A bug fix                                    | `fix/mobile-navbar-overlap`      |
| `chore/`   | Maintenance — deps, config, tooling          | `chore/bump-next-version`        |
| `docs/`    | Documentation only, no code change           | `docs/update-readme`             |
| `refactor/`| Restructuring code without changing behavior | `refactor/extract-card-component`|
| `style/`   | Formatting / whitespace only, no logic       | `style/format-globals-css`       |

---

## Commit Convention

Same prefixes as branch names. Format: `<type>: <short summary in lowercase, no period>`.

| Type       | Description                          | Example                                 |
|------------|--------------------------------------|-----------------------------------------|
| `feat`     | New feature                          | `feat: add hero section`                |
| `fix`      | Bug fix                              | `fix: correct navbar mobile layout`     |
| `chore`    | Maintenance / tooling                | `chore: update dependencies`            |
| `docs`     | Documentation only                   | `docs: improve setup instructions`      |
| `refactor` | Code restructure, no behavior change | `refactor: extract MemberCard`          |
| `style`    | Formatting only                      | `style: fix indentation in layout.tsx`  |

Keep the summary under ~70 characters. If you need more context, add a blank line and a longer description below.

---

## What a Good PR Looks Like

A good PR is **small, focused, and self-explanatory**. A reviewer should be able to understand what changed and why in under a minute.

### Checklist

- One feature/fix per PR (if it's growing past ~300 lines of diff, consider splitting)
- Descriptive title that matches a commit prefix (`feat:`, `fix:`, etc.)
- Brief description: **what** changed and **why**
- Screenshot or short video for any UI change
- Linked to the Notion task or GitHub issue
- You self-reviewed the diff before requesting review
- Lint and build pass locally

### Example PR

A real example of a small, clear PR — not over-polished, just what you'd actually write:

> **Title:** `feat: add team section to homepage`
>
> **Description:**
> Adds a team grid below the hero section that lists the dev team with avatars + GitHub links. Pulls names from a static array for now.
>
> Closes Notion task 'Add Team Section'.
>
> **Screenshot:** *(mobile + desktop side by side)*
>
> **Checklist**
> - [x] Lint passes
> - [x] Build passes
> - [x] Tested on mobile + desktop widths

That's it. Two sentences, a screenshot, a task link, the checkboxes. Don't try to write more than the change requires.

---

## Common Commands Reference

A cheat sheet for things you'll do constantly. Bookmark this section.

### Git

| Command                                  | What it does / when to use                                                   |
|------------------------------------------|------------------------------------------------------------------------------|
| `git status`                             | See what's changed in your working directory. Run this constantly.           |
| `git checkout main`                      | Switch to the `main` branch.                                                 |
| `git pull`                               | Fetch and merge the latest changes from GitHub into your current branch.     |
| `git checkout -b <branch-name>`          | Create and switch to a new branch.                                           |
| `git add <file>`                         | Stage a specific file for commit.                                            |
| `git commit -m "<type>: <message>"`      | Commit staged changes.                                                       |
| `git push -u origin <branch-name>`       | Push your branch to GitHub for the first time (sets upstream tracking).      |
| `git push`                               | Push subsequent commits on a branch that's already been pushed once.         |
| `git log --oneline`                      | View commit history in a compact format.                                     |
| `git diff`                               | See unstaged changes line by line.                                           |

### Node / npm

| Command          | What it does / when to use                                                |
|------------------|---------------------------------------------------------------------------|
| `npm install`    | Install dependencies. Run after cloning or after pulling changes to `package.json`. |
| `npm run dev`    | Start the dev server with hot reload. Your main development command.      |
| `npm run lint`   | Run ESLint. Run before pushing a PR.                                      |
| `npm run build`  | Production build. Run before pushing a PR.                                |
| `npm run start`  | Serve the production build (run `build` first). Useful for perf testing.  |

### Docker *(optional — only if testing the production image)*

| Command                       | What it does / when to use                                              |
|-------------------------------|-------------------------------------------------------------------------|
| `docker compose up --build`   | Build and start the production container. Use to test what CI builds.   |
| `docker compose up -d --build`| Same as above, but in the background.                                   |
| `docker compose down`         | Stop and remove the container.                                          |
| `docker compose logs -f`      | Tail the container logs (live).                                         |
| `docker compose ps`           | List running containers.                                                |
| `docker build -t gpkweb .`    | Build the image manually (no compose). Rarely needed.                   |
| `docker run -p 3000:3000 gpkweb` | Run the manually-built image.                                        |

---

## Don't Do This

A short list of things that will cause problems:

- **Don't push directly to `main`.** Always work on a feature branch and go through a PR.
- **Don't force-push to a shared branch** (`git push --force`). If you need to rewrite history on your own branch, use `--force-with-lease` and only if no one else is reviewing it.
- **Don't commit `.env` files or any secrets.** `.gitignore` blocks the common cases but always double-check `git status` before committing.
- **Don't commit `node_modules/`.** It's in `.gitignore` for a reason.
- **Don't bundle unrelated changes in one PR.** "Add feature X" should not also "fix unrelated bug Y" — that makes review harder and rollbacks messier.
- **Don't merge your own PR without a review** unless explicitly told to. The 1-reviewer rule is enforced for a reason.
- **Don't ignore failing CI.** If lint or build fails, fix it before asking for review — don't ask reviewers to look at broken code.

---

## Questions?

Ask in [#dev-general on Discord](https://discord.com/channels/1382815285974929418/1509283076390523010). No question is too basic — if you're confused about something, someone else probably is too.
