#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="ubuntu@79.76.114.68"
REMOTE_ROOT="~/cplumber"
REMOTE_DIR="$REMOTE_ROOT/flexcoders-sandbox"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

ssh "$REMOTE_HOST" "mkdir -p $REMOTE_DIR"

rsync -av --delete \
  --exclude ".next" \
  --exclude "node_modules" \
  --exclude ".git" \
  "$PROJECT_DIR"/ "$REMOTE_HOST":"$REMOTE_DIR"/

ssh "$REMOTE_HOST" "cd $REMOTE_DIR && npm install"
ssh "$REMOTE_HOST" "cd $REMOTE_DIR && npm run build"
ssh "$REMOTE_HOST" "cd $REMOTE_DIR && pm2 startOrReload ecosystem.config.cjs --update-env || pm2 start ecosystem.config.cjs"

echo "Copied project to $REMOTE_HOST:$REMOTE_DIR"
