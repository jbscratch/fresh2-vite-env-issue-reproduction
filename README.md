# Bug reproduction for an issue loading env vars from .env files with vite + fresh2 + deno

Repo Creation Steps:

1. `deno run -Ar jsr:@fresh/init fresh2-vite-env-issue-reproduction --tailwind --vscode`

2. Add `.env` and `.env.local` files to the root of the project.

```env
# .env 
MY_ENV="MY_ENV test value"
VITE_MY_ENV="VITE_MY_ENV test value"

# .env.local
MY_LOCAL_ENV="MY_LOCAL_ENV test value"
VITE_MY_LOCAL_ENV="VITE_MY_LOCAL_ENV test value"
```

Note: I used .env and .env.local since deno only supports loading .env files and
i wanted to know if some portion of the code has access to the vite-loaded .env
vars.
