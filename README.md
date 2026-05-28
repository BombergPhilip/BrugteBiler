# BrugteBiler

Projektet er sat op som en SvelteKit-baseret client/server-arkitektur.

## Struktur

- `Client/` indeholder Svelte UI, routes, assets og statiske filer.
- `Client/routes/api/` indeholder de SvelteKit API-routes, som browseren kalder.
- `Server/` indeholder backend-logik og data, som API-routes importerer fra.
- Roden indeholder build-konfiguration (`package.json`, `svelte.config.js`, `vite.config.ts`, `tsconfig.json`).

## Udvikling

Installer dependencies, hvis de mangler:

```sh
npm install
```

Start udviklingsserveren:

```sh
npm run dev
```

Frontend henter eksempeldata fra `/api/cars`, som bruger `Server/api/cars.ts`.

## Build

```sh
npm run build
```
