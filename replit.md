# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains a CJ Dropshipping website clone — an 11-page static React site with client-side routing, plus an API server scaffold.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui
- **Routing**: wouter
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## CJ Dropshipping Website

The main artifact is a pixel-accurate clone of https://cjdropshipping.com/ with 11 pages:

- **Brand color**: Orange (#f97316 / Tailwind orange-500)
- **Background**: Light gray (#f5f6f8)
- **Pages**: Homepage, Find Products, Source For Me, Warehouse, Services, Blog, Academy, Podcast, Login/Sign Up, Product Detail, Cart & Checkout
- **Shared components**: Header (with navigation) and Footer
- **Images**: Static images in `artifacts/cj-dropshipping/public/images/`
- **Routes**: `/`, `/find-products`, `/source-for-me`, `/warehouse`, `/services`, `/blog`, `/academy`, `/podcast`, `/login`, `/product/:id`, `/checkout`

### Mockup Sandbox

Original mockup prototypes are in `artifacts/mockup-sandbox/src/components/mockups/cj-dropshipping/`. These are displayed on the canvas board as iframe previews.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
