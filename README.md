# Sustainable Living App

Cross-platform Expo + React Native app that helps students adopt sustainable daily habits.

## Stack
- **Frontend:** Expo (React Native + TypeScript), Expo Router, NativeWind, Zustand, React Query
- **Backend:** Supabase (Auth + Postgres + Edge Functions)
- **Data:** Expo SQLite for offline persistence, Zod for validation

## Getting Started

### Prerequisites
- Node.js 20+
- npm 9+
- Expo CLI (`npm install -g expo-cli`) optional for local debugging

### Installation
```bash
npm install
```


### Development
```bash
npm run start
```

This launches the Expo dev server. Use the Expo Go app (iOS/Android) or an emulator.

### Quality Gates
```bash
npm run lint
npm run typecheck
npm test
```

### Formatting
```bash
npm run format:write
```

## Project Structure
```
app/                # Expo Router routes
src/                # Feature modules, stores, utilities
assets/             # App icons, splash assets
.github/workflows/  # CI configuration
```

## Environment Variables
Create a `.env` file (never commit) and supply:
```
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

## Git Hooks
Husky + lint-staged run linting and formatting before each commit.

## Continuous Integration
GitHub Actions workflow (`ci.yml`) runs linting, type-checking, and unit tests on pushes and pull requests targeting `main`.

## Scripts
| Command | Description |
| --- | --- |
| `npm run start` | Start Expo dev server |
| `npm run android` | Build & run Android native project |
| `npm run ios` | Build & run iOS native project |
| `npm run web` | Launch web preview |
| `npm run lint` | ESLint with zero warnings |
| `npm run typecheck` | TypeScript strict noEmit |
| `npm test` | Run unit tests via Jest |
| `npm run format` | Check formatting |
| `npm run format:write` | Fix formatting |


