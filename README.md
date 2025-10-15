# 🪴 Jungle Tasks | Collaborative Task Management System

A full-stack collaborative task management system designed to support teams in organizing tasks, assigning responsibilities, commenting in real time, and receiving instant notifications through WebSockets.
Developed as a monorepo using **Turborepo**, **NestJS**, **React**, and **RabbitMQ** — optimized for scalability, maintainability, and developer experience.

---

## 📜 Table of Contents

- [About the Project](#-about-the-project)
- [✨ Core Features](#-core-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Monorepo Structure](#-monorepo-structure)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [🗺️ Development Roadmap](#️-development-roadmap)
- [📘 Internal Documentation](#-internal-documentation)
- [📄 License](#-license)

---

## 📖 About the Project

**Jungle Tasks** is a full-stack challenge project developed to simulate a production-grade environment used in modern software companies.
The goal is to build a **collaborative task management system** with a microservices architecture, featuring authentication, real-time notifications, and a clean, responsive UI.

This project is part of a **Full-Stack Developer Challenge** proposed by *Jungle Gaming* and aims to demonstrate professional-level organization, domain modeling, and DevOps skills.

---

## ✨ Core Features

- **🔐 Secure Authentication:**
  Centralized Auth microservice with JWT (access & refresh tokens) and bcrypt hashing.

- **🧱 Task Management:**
  CRUD for tasks with priorities, due dates, and multi-user assignment.

- **💬 Comments & History:**
  Comment on tasks and view a complete audit log of changes.

- **📡 Real-Time Notifications:**
  WebSocket-based updates for task assignments, comments, and status changes.

- **🐇 Event-Driven Microservices:**
  Inter-service communication powered by RabbitMQ.

- **🐳 Docker-First Infrastructure:**
  Everything runs through Docker Compose (services, databases, and brokers).

- **🧩 Monorepo with Turborepo:**
  Unified development workflow for both frontend and backend.

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Monorepo** | [Turborepo](https://turbo.build/repo), [pnpm](https://pnpm.io/) |
| **Backend** | [NestJS](https://nestjs.com/), [TypeORM](https://typeorm.io/), [RabbitMQ](https://www.rabbitmq.com/), [PostgreSQL](https://www.postgresql.org/) |
| **Frontend** | [React](https://react.dev/), [TanStack Router](https://tanstack.com/router), [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/) |
| **Auth & Security** | JWT, bcrypt |
| **Dev Tools** | Docker & Compose, ESLint, Prettier, Husky, lint-staged |
| **Testing** | Jest, Supertest |
| **Docs** | Swagger / OpenAPI, Markdown-based developer docs |

---

## 📂 Monorepo Structure

```text
/
├── apps/
│   ├── web/                     # React frontend (UI + WebSocket client)
│   ├── api-gateway/             # Entry point (Nest HTTP + WebSocket)
│   ├── auth-service/            # Auth microservice (JWT + bcrypt)
│   ├── tasks-service/           # Task microservice (CRUD + RabbitMQ)
│   └── notifications-service/   # Notification microservice (RabbitMQ + WS)
│
├── packages/
│   ├── types/                   # Shared TypeScript types
│   ├── utils/                   # Shared utility functions
│   ├── eslint-config/           # Shared ESLint config
│   └── tsconfig/                # Shared TS base config
│
├── docs/                        # Internal documentation (Git Flow, Dev Plan, etc.)
│   ├── GIT_FLOW.md
│   ├── DEVELOPMENT_PLAN.md
│   └── ARCHITECTURE.md
│
├── CHANGELOG.md
├── turbo.json
├── docker-compose.yml
└── package.json
```

-----

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Installation & Setup

1.  **Clone the repository**

```bash
git clone [https://github.com/your-username/jungle-tasks.git](https://github.com/your-username/jungle-tasks.git)
cd jungle-tasks
```

2.  **Install dependencies**

```bash
pnpm install
```

3.  **Configure Environment Variables**
Each service in the `apps/` directory includes an `.env.example` file. Create a copy named `.env` for each one and adjust the values if necessary.

4.  **Run the Entire Stack**
This single command will build the images and start all services, databases, and brokers in development mode with hot-reloading.

```bash
docker compose up --build
```

- **Frontend UI** will be available at `http://localhost:3000`
- **API Gateway** will be available at `http://localhost:3001`
- **RabbitMQ Admin** will be available at `http://localhost:15672`

-----

## 📜 Available Scripts

These scripts are useful for tasks like linting and formatting, and can be run from the project root.

| Command | Description |
| ---------------------- | ---------------------------------------------- |
| `pnpm turbo run dev` | Run all apps in dev mode (if not using Docker) |
| `pnpm turbo run build` | Build all apps for production |
| `pnpm turbo run lint` | Run ESLint across the monorepo |
| `pnpm format` | Run Prettier to format all code |
| `git cz` | Run commitizen assistant (if configured) |

-----

## 🗺️ Development Roadmap

The complete, task-based plan is documented in `docs/DEVELOPMENT_PLAN.md`. The summary below tracks the progress of each major phase.

| Phase | Focus | Status |
| ----- | ----------------------------- | -------------- |
| 0 | Project Initialization | ✅ Done |
| 1 | Authentication Service | 🚧 In Progress |
| 2 | API Gateway | ⏳ Planned |
| 3 | Tasks Service | ⏳ Planned |
| 4 | Notifications Service | ⏳ Planned |
| 5 | Frontend UI | ⏳ Planned |
| 6 | Infrastructure (Docker) | ⏳ Planned |
| 7 | Final Release & Documentation | ⏳ Planned |

-----

## 📘 Internal Documentation

This project contains internal docs to guide development and maintain consistency.

- **[🧭 Git Flow](./docs/GIT_FLOW.md):** Our branching model and release strategy.
- **[🗺️ Development Plan](./docs/DEVELOPMENT_PLAN.md):** The detailed, step-by-step plan for each feature.
- **[🧾 Changelog](./CHANGELOG.md):** A log of all notable changes in each version.

-----

## 📄 License

This project is licensed under the **MIT License**.
See the [`LICENSE`](./LICENSE) file for details.

-----

**Author:** Vinícius Silva Santos
**Project:** 🪴 Jungle Tasks — Full-Stack Challenge @ Jungle Gaming
**Last Updated:** October 14th, 2025
