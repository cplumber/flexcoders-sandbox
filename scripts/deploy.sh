#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="${REMOTE_HOST:-ubuntu@79.76.114.68}"
REMOTE_ROOT="${REMOTE_ROOT:-~/cplumber}"
REMOTE_DIR="${REMOTE_DIR:-$REMOTE_ROOT/flexcoders-sandbox}"
BASE_PATH="${BASE_PATH:-/flexcoders-sandbox}"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

ssh "$REMOTE_HOST" "mkdir -p $REMOTE_DIR"

rsync -av --delete \
  --exclude ".git" \
  --exclude ".next" \
  --exclude "node_modules" \
  --exclude "cache" \
  --exclude "turbopack" \
  "$PROJECT_DIR"/ "$REMOTE_HOST":"$REMOTE_DIR"/

ssh "$REMOTE_HOST" "cd $REMOTE_DIR && BASE_PATH=$BASE_PATH npm install"
ssh "$REMOTE_HOST" "cd $REMOTE_DIR && BASE_PATH=$BASE_PATH npm run build"
ssh "$REMOTE_HOST" "cd $REMOTE_DIR && pm2 startOrReload ecosystem.config.cjs --update-env"

echo "Deployed to https://oci1.xln.one$BASE_PATH"
