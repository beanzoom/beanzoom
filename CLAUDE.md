# Beanzoom - Claude Code Instructions

## Project Overview

This is a React + TypeScript application built with:
- **Vite** - Build tool and dev server
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library (Radix UI + Tailwind)
- **Supabase** - Backend (auth, database, storage)
- **React Query** - Server state management
- **React Router** - Client-side routing
- **Zustand** - Client state management
- **React Hook Form + Zod** - Form handling and validation

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   ├── layout/      # Layout components (AppLayout, Sidebar, etc.)
│   └── guards/      # Route guards (AuthGuard, etc.)
├── features/        # Feature-based modules
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configs
├── pages/           # Route page components
├── types/           # TypeScript type definitions
└── App.tsx          # Root component with routing
```

## Development Commands

```bash
npm run dev      # Start development server (port 5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Database & Migrations

- Supabase is used for the database
- For SQL migrations, create files in `/database/migrations/` (numbered)
- For debugging queries, use `/database/debug/`

### Database Connection
```
postgresql://postgres:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres
```

Run SQL files:
```bash
psql "postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres" -f database/migrations/XXX.sql
```

## Coding Conventions

1. **Components**: Use functional components with TypeScript
2. **Styling**: Use Tailwind CSS classes, avoid inline styles
3. **State**: Use React Query for server state, Zustand for client state
4. **Forms**: Use React Hook Form with Zod validation
5. **Imports**: Use `@/` alias for src directory imports

## Important Notes

- Always use the existing shadcn/ui components when possible
- Prefer editing existing files over creating new ones
- Keep solutions simple and focused - avoid over-engineering
- Test changes before committing

## Environment Variables

Copy `.env.example` to `.env` and configure:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key
