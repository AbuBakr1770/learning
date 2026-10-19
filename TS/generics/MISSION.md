# Mission: TypeScript Generics

## Why
Stop getting lost in generic-heavy code at work (React/Next.js, Node backends, typed API clients) and start writing my own reusable, fully-typed helpers instead of reaching for `any`, which also moves me toward mid/senior-level TypeScript and interview readiness.

## Success looks like
- Read a signature like `useState<User | null>`, `Promise<T>`, or `function get<T, K extends keyof T>` and explain what each piece does
- Write generic functions (fetch wrappers, array/object utils) that infer types for callers with no `any`
- Write generic React components and hooks, and generic types for API responses (`ApiResponse<T>`, `Result<T, E>`)
- Use constraints (`extends`, `keyof`) correctly and explain why a constraint is needed
- Answer common generics interview questions and solve type challenges at an intermediate level

## Constraints
- ~30+ minute sessions; hands-on exercises checked by the real compiler (`npm run check`)
- Stack: React/Next.js, Node backend, plain TS

## Out of scope (for now)
- Deep type-level programming (recursive conditional types, template-literal parsers): revisit once the basics stick
