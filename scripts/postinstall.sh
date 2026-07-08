#!/bin/bash
# Postinstall script — generates Prisma client
# Used by Vercel during deployment (configured in package.json scripts)

cd "$(dirname "$0")/.."
npx prisma generate
