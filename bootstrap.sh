#!/usr/bin/env bash
set -euo pipefail

NODE_REG="https://registry.npmjs.org"
MIRROR_REG="https://registry.npmmirror.com"
OFFLINE_CACHE="$(pwd)/offline-cache"

function run_scaffold() {
  local extra_args="$1"
  if [ ! -d "my-design-system" ]; then
    pnpm create vite my-design-system --template react-ts $extra_args
  fi
  cd my-design-system
  pnpm add -D tailwindcss postcss autoprefixer @storybook/react vite-tsconfig-paths $extra_args
  npx tailwindcss init -p
  cd ..
}

ONLINE=1
curl -sSf --connect-timeout 3 "$NODE_REG/-/ping" > /dev/null && ONLINE=0 || ONLINE=1

if [ $ONLINE -eq 0 ]; then
  echo "Online with main registry."
  run_scaffold ""
  exit 0
fi

# Try using mirror
export NPM_CONFIG_REGISTRY="$MIRROR_REG"
pnpm config set registry "$NPM_CONFIG_REGISTRY" > /dev/null

if run_scaffold ""; then
  exit 0
fi

# Fallback offline
if [ -d "$OFFLINE_CACHE" ]; then
  echo "Attempting offline install using $OFFLINE_CACHE"
  pnpm config set store-dir "$OFFLINE_CACHE" > /dev/null
  run_scaffold "--offline" && exit 0
fi

echo "Failed to bootstrap project. Check network connectivity or offline cache."
exit 1
