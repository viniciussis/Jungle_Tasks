# 🧭 Git Workflow — 🪴 Jungle Tasks

This document describes the Git Flow strategy used in the **Jungle Tasks** project.
It follows a professional branching model inspired by [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/), adapted for modern full-stack monorepos.

Our features and milestones are defined in the [Development Plan](./DEVELOPMENT_PLAN.md).

---

## 🧱 1. Branch Structure

| Branch | Purpose |
|--------------|------------------------------------------------|
| **main** | Always stable, production-ready code. |
| **develop** | Integration branch for tested, ready-to-release features. |
| **feature/*** | Development of new features or improvements. |
| **fix/*** | Non-urgent bug fixes for the `develop` branch. |
| **release/*** | Pre-release stabilization (final tests, doc updates). |
| **hotfix/*** | Urgent production fixes originating from `main`. |

**Example structure:**
```text
main
│
├── develop
│   ├── feature/auth-service
│   ├── feature/tasks-service
│   ├── feature/web-ui
│   ├── fix/comment-bug
│   └── release/v1.0.0
│
└── hotfix/jwt-expiry
````

-----

## ⚙️ 2. Daily Workflow

#### A. Create a feature branch

Always start from an up-to-date `develop` branch.

```bash
git checkout develop
git pull origin develop
git checkout -b feature/auth-service
```

#### B. Use Conventional Commits

Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

| Type | Meaning |
|------------|---------------------------|
| **feat:** | A new feature |
| **fix:** | A bug fix |
| **chore:** | Build/config/infra changes |
| **refactor:**| Code change that neither fixes a bug nor adds a feature |
| **docs:** | Documentation only changes |
| **test:** | Adding missing tests or correcting existing tests |
| **style:** | Code formatting, lint fixes, etc. |

**Example:**

```bash
git commit -m "feat(auth): add JWT login and refresh token support"
```

-----

## 🔀 3. Merging a Feature (Pull Request)

When a feature is complete and tested:

1.  Push your branch to the remote repository:

    ```bash
    git push origin feature/auth-service
    ```

2.  Open a **Pull Request (PR)** on GitHub with:

      - **Base:** `develop`
      - **Compare:** `feature/auth-service`

3.  Use the PR template below to describe your changes.

-----

## 📊 4. Pull Request (PR) Template

**Title:** `feat(tasks): implement CRUD microservice for tasks`

**Description:**

```markdown
### Summary
Implemented CRUD endpoints for the Tasks microservice and integrated RabbitMQ event publishing for `task.created` and `task.updated`.

Closes tasks outlined in: **[Phase 3 - Tasks Service](../docs/DEVELOPMENT_PLAN.md#--phase-3--tasks-service)**

### Changes
- Added `task.entity.ts` and `task.service.ts`.
- Integrated RabbitMQ publisher in the service layer.
- Added Swagger documentation for all new endpoints.

### How to Test
1. Run `docker compose up`.
2. Access the API Gateway at `http://localhost:3001/api/docs`.
3. Verify that GET/POST/PUT/DELETE operations on `/api/tasks` work as expected.
4. Check the RabbitMQ Management UI to confirm messages are published to the queue.
```

-----

## 🚢 5. Creating a Release

When `develop` is stable and ready for production:

```bash
# 1. Create release branch from develop
git checkout develop
git pull
git checkout -b release/v1.0.0

# 2. During this phase, perform final tests, update docs (like CHANGELOG.md), and make minor fixes.

# 3. Merge into main
git checkout main
git merge --no-ff release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# 4. Merge back into develop to incorporate any changes made in the release branch
git checkout develop
git merge --no-ff release/v1.0.0
git push origin develop

# 5. Clean up
git branch -d release/v1.0.0
```

-----

## 🩹 6. Hotfixes

For urgent fixes on production (`main`):

```bash
# 1. Create hotfix branch from main
git checkout main
git pull
git checkout -b hotfix/fix-refresh-token

# 2. After fixing and testing:
git commit -m "fix(auth): resolve refresh token expiration issue"

# 3. Merge into main and tag
git checkout main
git merge --no-ff hotfix/fix-refresh-token
git tag -a v1.0.1 -m "Hotfix: Fixed refresh token expiration"
git push origin main --tags

# 4. Merge back into develop
git checkout develop
git merge --no-ff hotfix/fix-refresh-token
git push origin develop

# 5. Clean up
git branch -d hotfix/fix-refresh-token
```

-----

**Author:** Vinícius Silva Santos
**Project:** 🪴 Jungle Tasks — Full-Stack Challenge @ Jungle Gaming
**Last Updated:** October 14th, 2025

```