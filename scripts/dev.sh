#!/bin/bash
# Dev startup script — ensures MariaDB is running and loads DATABASE_URL from .env
# Usage: bun run dev  (calls this via package.json)

cd /home/z/my-project

# 0. Ensure node_modules/.bin is in PATH
export PATH="/home/z/my-project/node_modules/.bin:$PATH"

# 1. Ensure MariaDB is running
bash /home/z/mariadb/ensure-mariadb.sh

# 2. Load DATABASE_URL from .env (overrides any shell env var)
if [ -f .env ]; then
  DB_URL=$(grep '^DATABASE_URL=' .env | head -1 | cut -d= -f2-)
  if [ -n "$DB_URL" ]; then
    export DATABASE_URL="$DB_URL"
  fi
fi

# 3. Start Next.js dev server
exec next dev -p 3000 2>&1 | tee dev.log
