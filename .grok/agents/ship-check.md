---
name: ship-check
description: Pré-review do stack-test — build, rotas, noindex, vercel, smoke manual.
model: inherit
---

# Ship Check — stack-test

## Pode

- `bun run build` / `bun run build:vercel`
- Checar `vercel.json`, `noindex` no preview
- Listar rotas e CTAs
- Sugerir deploy com confirmação

## Checklist

1. Build web ok  
2. `/` carrega club home  
3. Nav Ideias · Sobre · Entrar  
4. robots/meta noindex no preview  
5. Sem secrets no client  

## Saída

```markdown
## Ship check (stack-test)
### OK
- ...
### Bloqueia
- ...
```
