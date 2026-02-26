# Graphics Programming Knights Web Dev Repo

Website for Graphics Programming Knights, built with **Next.js + TypeScript + Three.js**.

## Team

- Sebastian Noel (@sebastian-noel)
- Stevin George (@stevin006)
- Alejandro Jaimes (@alecocosette)

Message Sebastian through <a href="https://discord.com/users/353944957779968010">discord</a> if you have an interest in contributing.

## Tech Stack

- Next.js
- Three.js
- TypeScript
- ESLint
- Node.js (LTS)

## Getting Started

### Clone Repository

```bash
git clone https://github.com/GraphicsProgrammingKnights/gpkweb
```

### Navigate to project directory

```bash
cd gpkweb
```

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm


### Set up Node.js version (using [nvm](https://github.com/nvm-sh/nvm))

Use the following commands to ensure you are using Node.js 20 specified in `.nvmrc`

```bash
nvm install  # Install
nvm use      # Switch to version
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
npm run start
```

## Git Workflow

- `main` is protected and always stable.
- Create branches from `main`: 

  ```bash
  git checkout -b <branch-type>/<short-descrption>
  ```

  Examples:
  - `feature/about-section`
  - `fix/<short-description>`
  - `chore/<short-description>`
- Open a Pull Request into `main`.
- At least 1 teammate review required before merge.
- Use squash merge for clean history.

## Commit Convention

Follow this commit style (examples provided):

- `feat: add hero section`
- `fix: correct navbar mobile layout`
- `chore: update dependencies`
- `docs: improve setup instructions`

## Project Structure

```text
.
├── app/                   # Next.js routes
├── components/            # Reusable UI components
├── public/                # Static assets
├── styles/                # Global/component styles
├── .github/               # GitHub templates/workflows
├── package.json
├── tsconfig.json
└── README.md
```

## Infrastructure Plan

- Docker files at repository root (`Dockerfile`, `.dockerignore`, optional `docker-compose.yml`)
- CI/CD workflows under `.github/workflows/`

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.