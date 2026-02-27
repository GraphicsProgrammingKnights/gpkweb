# Graphics Programming Knights Web Dev Repo

Website for Graphics Programming Knights, built with **Next.js + TypeScript + Three.js**.

## Team

- Sebastian Noel (@sebastian-noel)
- Stevin George (@stevin006)
- Alejandro Jaimes (@alecocosette)

Message Sebastian through [discord](https://discord.com/users/353944957779968010) if you have an interest in contributing.

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
  git checkout -b <branch-type>/<short-description>
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
├── app/                 # Next.js routes
├── components/          # Reusable UI components
├── public/              # Static assets
├── styles/              # Global/component styles
├── .github/             # GitHub templates/workflows
├── package.json
├── tsconfig.json
└── README.md
```

## Docker

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) (included with Docker Desktop)

### Build and Run with Docker Compose (Recommended)

```bash
# Build the container
docker compose build

# Build and start the container
docker compose up --build

# Run in background
docker compose up -d --build

# Stop the container
docker compose down
```

### Build and Run with Docker (Manual)

```bash
# Build the image
docker build -t gpkweb .

# Run the container
docker run -p 3000:3000 gpkweb
```

Open [http://localhost:3000](http://localhost:3000)

### Docker Commands Reference

| Command | Description |
|---------|-------------|
| `docker compose up --build` | Build and start |
| `docker compose up -d` | Start in background |
| `docker compose down` | Stop containers |
| `docker compose logs -f` | View logs |
| `docker compose ps` | List running containers |

## Infrastructure

- Docker files at repository root (`Dockerfile`, `.dockerignore`, `docker-compose.yml`)
- CI/CD workflows under `.github/workflows/`

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
