#!/bin/bash
# Dev startup script — ensures PostgreSQL is running and loads DATABASE_URL from .env
# Usage: bun run dev  (calls this via package.json)

cd /home/z/my-project

# 0. Ensure node_modules/.bin is in PATH
export PATH="/home/z/my-project/node_modules/.bin:$PATH"

# 1. Ensure PostgreSQL is running
bash /home/z/postgres/ensure-postgres.sh

# 2. Load DATABASE_URL and DIRECT_URL from .env (overrides any shell env var)
if [ -f .env ]; then
  for var in DATABASE_URL DIRECT_URL SESSION_SECRET; do
    VAL=$(grep "^${var}=" .env | head -1 | cut -d= -f2-)
    if [ -n "$VAL" ]; then
      export "$var=$VAL"
    fi
  done
fi

# 3. Start Next.js dev server
exec next dev -p 3000 2>&1 | tee dev.log
