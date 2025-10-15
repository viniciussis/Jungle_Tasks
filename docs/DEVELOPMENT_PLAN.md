# 🗺️ Development Plan — 🪴 Jungle Tasks

> This document defines the roadmap and development workflow for the **Jungle Tasks** project.
> It follows a milestone-based approach, aligned with our [Git Flow strategy](./GIT_FLOW.md) and tracked in the [Changelog](./../CHANGELOG.md).

---

## 🧩 VS Code Integration (TODO Tree / TODO Highlight)

Before starting, install these VS Code extensions to track progress directly from your editor:
1.  **TODO Tree**
2.  **Todo Highlight**

Every `TODO:`, `IN PROGRESS:`, or `DONE:` tag in this file and in the code will appear in the **TODO Tree side panel**, giving you a live overview of the project's status.

---

## 🧱 PHASE 0 — Project Initialization & Tooling

**Goal:** Establish a solid foundation for the monorepo with proper tooling and documentation.

- [x] ✅ **DONE:** Create monorepo with `pnpm + Turborepo`.
- [x] ✅ **DONE:** Initialize Git repository and setup `.gitignore`.
- [x] ✅ **DONE:** Define repository metadata in root `package.json`.
- [x] ✅ **DONE:** Create base documentation (`README.md`, `GIT_FLOW.md`, `CHANGELOG.md`).
- [x] ✅ **DONE:** Add `DEVELOPMENT_PLAN.md` (this document).
- [ ] 🚧 **IN PROGRESS:** Configure shared ESLint + Prettier in `/packages/eslint-config`.
- [ ] 🧩 **TODO:** Configure shared TypeScript base config in `/packages/tsconfig`.
- [ ] 🧩 **TODO:** Add Husky + lint-staged for pre-commit validation.

---

## 🔐 PHASE 1 — Authentication Service

**Goal:** Build the core microservice responsible for user identity and security.

- [ ] 🚧 **IN PROGRESS:** Create `apps/auth-service` using Nest.js.
- [ ] 🧩 **TODO:** Establish PostgreSQL connection with TypeORM.
- [ ] 🧩 **TODO:** Implement User entity and initial database migration.
- [ ] 🧩 **TODO:** Implement user registration endpoint with bcrypt password hashing.
- [ ] 🧩 **TODO:** Implement login endpoint (generate JWT access + refresh tokens).
- [ ] 🧩 **TODO:** Create refresh token endpoint.
- [ ] 🧩 **TODO:** Add input validation with DTOs (`class-validator`).
- [ ] 🧩 **TODO:** Document all endpoints with Swagger/OpenAPI.
- [ ] 🧩 **TODO:** Write unit tests for core authentication logic.

📦 **Milestone Branch:** `feature/auth-service`

---

## 📡 PHASE 2 — API Gateway

**Goal:** Create the single entry point that secures and routes all incoming requests.

- [ ] 🧩 **TODO:** Create `apps/api-gateway` using Nest.js.
- [ ] 🧩 **TODO:** Implement JWT authentication guard to protect routes.
- [ ] 🧩 **TODO:** Add rate limiting (e.g., 10 requests per second).
- [ ] 🧩 **TODO:** Proxy requests to the `auth-service`.
- [ ] 🧩 **TODO:** Set up the main Swagger documentation page (`/api/docs`).
- [ ] 🧩 **TODO:** Create a WebSocket Gateway server for real-time communication.
- [ ] 🧩 **TODO:** Implement a basic health check endpoint.

📦 **Milestone Branch:** `feature/api-gateway`

---

## 📝 PHASE 3 — Tasks Service

**Goal:** Develop the service for managing all task-related business logic.

- [ ] 🧩 **TODO:** Create `apps/tasks-service` using Nest.js.
- [ ] 🧩 **TODO:** Define entities (Task, Comment, History) and migrations.
- [ ] 🧩 **TODO:** Implement full CRUD logic for tasks.
- [ ] 🧩 **TODO:** Implement multi-user assignment logic.
- [ ] 🧩 **TODO:** Implement comment creation and listing logic.
- [ ] 🧩 **TODO:** Implement a simple audit log for task changes.
- [ ] 🧩 **TODO:** Publish events to RabbitMQ: `task.created`, `task.updated`, `task.comment.created`.
- [ ] 🧩 **TODO:** Write unit tests for the main service logic.

📦 **Milestone Branch:** `feature/tasks-service`

---

## 🔔 PHASE 4 — Notifications Service

**Goal:** Build the service that consumes events and delivers real-time updates to users.

- [ ] 🧩 **TODO:** Create `apps/notifications-service` using Nest.js.
- [ ] 🧩 **TODO:** Implement RabbitMQ consumer to listen for task events.
- [ ] 🧩 **TODO:** Persist notifications in the database.
- [ ] 🧩 **TODO:** Connect to the API Gateway's WebSocket to emit notifications to clients.
- [ ] 🧩 **TODO:** Add logic to mark notifications as read.
- [ ] 🧩 **TODO:** Write tests for the notification flow.

📦 **Milestone Branch:** `feature/notifications-service`

---

## 🌐 PHASE 5 — Frontend UI

**Goal:** Create a modern, responsive, and intuitive user interface for task collaboration.

- [ ] 🧩 **TODO:** Create `apps/web` project (React + Vite).
- [ ] 🧩 **TODO:** Set up Tailwind CSS + shadcn/ui.
- [ ] 🧩 **TODO:** Build authentication pages (Login/Register modals or pages).
- [ ] 🧩 **TODO:** Build the main dashboard/task list page with filters and search.
- [ ] 🧩 **TODO:** Build the task detail page to show comments, history, and status.
- [ ] 🧩 **TODO:** Integrate WebSocket client to receive and display real-time notifications.
- [ ] 🧩 **TODO:** Manage global state (auth token) with Zustand or Context API.
- [ ] 🧩 **TODO:** Implement form validation with `react-hook-form` + `zod`.
- [ ] 🧩 **TODO:** Add UI feedback elements like toast notifications and skeleton loaders.

📦 **Milestone Branch:** `feature/web-ui`

---

## 🐳 PHASE 6 — Infrastructure & Docker

**Goal:** Ensure all services run together seamlessly in a containerized environment.

- [ ] 🧩 **TODO:** Write the main `docker-compose.yml` file.
- [ ] 🧩 **TODO:** Add services: `api-gateway`, `auth-service`, `tasks-service`, `notifications-service`, `web`.
- [ ] 🧩 **TODO:** Add infrastructure: `postgres` database and `rabbitmq` broker.
- [ ] 🧩 **TODO:** Create optimized, multi-stage `Dockerfile` for each application.
- [ ] 🧩 **TODO:** Ensure all services communicate correctly within the Docker network.
- [ ] 🧩 **TODO:** Verify the entire stack starts correctly with `docker compose up`.

📦 **Milestone Branch:** `feature/docker-setup`

---

## 🚀 PHASE 7 — Release & Final Touches

**Goal:** Stabilize the project, finalize documentation, and prepare for delivery.

- [ ] 🧩 **TODO:** Write `ARCHITECTURE.md` with a simple system diagram and data flow.
- [ ] 🧩 **TODO:** Review and finalize all documentation (`README.md`, etc.).
- [ ] 🧩 **TODO:** Update `CHANGELOG.md` with all changes for version `v1.0.0`.
- [ ] 🧩 **TODO:** Perform a final code review and cleanup.
- [ ] 🧩 **TODO:** Create the release branch: `release/v1.0.0`.
- [ ] 🧩 **TODO:** Merge to `main`, tag the release, and merge back to `develop`.

---

## 🧩 VS Code Integration (TODO Tree / TODO Highlight)

To use this plan effectively:

1. Install extensions:
   - **TODO Tree**
   - **Todo Highlight**

2. Configure your VS Code settings (optional):

```json
   "todo-tree.tree.showScanModeButton": false,
   "todo-tree.highlights.defaultHighlight": {
     "background": "#003366",
     "foreground": "#FFFFFF"
   },
   "todo-tree.highlights.customHighlight": {
     "TODO": { "icon": "checklist", "type": "line", "background": "#0066FF" },
     "IN PROGRESS": { "icon": "flame", "type": "line", "background": "#FF9900" },
     "DONE": { "icon": "check", "type": "line", "background": "#00AA55" }
   }
```

3. Now every `TODO:`, `IN PROGRESS:` or `DONE:` tag inside your markdown and code will appear in the **TODO Tree panel**.

---

**Author:** Vinícius Silva Santos
**Project:** 🪴 Jungle Tasks — Full-Stack Challenge @ Jungle Gaming
**Last Updated:** October 14th, 2025

---
