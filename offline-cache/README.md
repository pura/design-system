# Offline Cache

To build in a fully offline environment, pre-populate pnpm's store on a machine with internet:

```bash
pnpm fetch create-vite@latest tailwindcss@latest postcss@latest autoprefixer@latest @storybook/react@latest vite-tsconfig-paths@latest
```

Archive the store and add it to this directory:

```bash
tar -czf offline-cache.tar.gz ~/.local/share/pnpm/store/v3
```

Place `offline-cache.tar.gz` here and extract before running `bootstrap.sh`.
