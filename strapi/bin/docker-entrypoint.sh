#!/bin/sh
#This file runs after docker has started the container
set -ea

if [ ! -d "node_modules" ] || [ ! "$(ls -qAL node_modules 2>/dev/null)" ]; then
  echo "Node modules not installed. Installing..."
  if [ -f "yarn.lock" ]; then
    yarn install
  else
    npm install
  fi
fi

if [ ! -d "build" ]; then
  npm run build
fi

echo "Starting your app..."
exec "$@"
