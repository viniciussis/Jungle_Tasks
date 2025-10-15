# 🧾 Changelog — 🪴 Jungle Tasks

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Configured Husky and lint-staged to run ESLint and Prettier on pre-commit.
- Added `lint` and `format` scripts to the root `package.json` and all shared packages.
- Created shared TypeScript configuration package (`@jungle-tasks/tsconfig`) with presets for `base`, `node`, and `react`.
- Created placeholder packages for shared types (`@jungle-tasks/types`) and utilities (`@jungle-tasks/utils`).
- Created shared ESLint configuration package (`@jungle-tasks/eslint-config`) with base, Node, and React presets.
- Added a root Prettier configuration file (`.prettierrc.js`) to enforce code style.
- Installed ESLint and Prettier as root development dependencies.
- Added a `diff` script to the root `package.json` for convenience.

### Changed

- Renamed project in `package.json` from `jungle_tasks` to `jungle-tasks` to follow npm naming conventions.

### Fixed

- N/A

---

## [0.1.0] - 2025-10-14

### Added

- Project initialized as **"Jungle Tasks"**.
- Configured `.gitignore`, `pnpm-workspace.yaml`, and repository setup.
- Created base documentation: `README.md`, `docs/GIT_FLOW.md`, and `docs/DEVELOPMENT_PLAN.md`.
- Set up root `package.json` with project metadata and scripts.
- Configured Turborepo for monorepo management.

### Changed

- Defined a clear monorepo structure for applications (`apps/`) and shared packages (`packages/`).
- Established the Git Flow branching and release strategy.

---

**Author:** Vinícius Silva Santos
**Project:** 🪴 Jungle Tasks — Full-Stack Challenge @ Jungle Gaming
**Last Updated:** October 15th, 2025
