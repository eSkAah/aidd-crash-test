---
description: APPLY package installation rules WHEN installation new package
applyTo: 'frontend/**/*.ts,backend/**/*.ts'
---

- Never install new package directly
- Always ask user
- Check existing packages before proposing new
- Prefer stable versions
- Use 'pnpm' for package management
- Use 'npm' for package management only if pnpm is not available
