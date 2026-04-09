#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="ubuntu@79.76.114.68"
REMOTE_DIR="~/flexcoders-stripe-playground"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

rsync -av --delete \
  --exclude ".next" \
  --exclude "node_modules" \
  --exclude ".git" \
  "$PROJECT_DIR"/ "$REMOTE_HOST":"$REMOTE_DIR"/

ssh "$REMOTE_HOST" "cd $REMOTE_DIR && npm install"

echo "Copied project to $REMOTE_HOST:$REMOTE_DIR"
