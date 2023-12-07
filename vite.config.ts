/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'

import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_URL ?? '/',
    build: {
      outDir: 'build',
    },
    test: {
      globals: true,
      environment: 'happy-dom',
    },
    plugins: [
      svgr({
        svgrOptions: {
          prettier: false,
          svgo: true,
          svgoConfig: {
            floatPrecision: 2,
            plugins: [{ removeViewBox: false }],
          },
          titleProp: true,
          ref: true,
        },
        include: "**/*.svg?svgr",
      }),
      tsconfigPaths(),
      react(),
    ],
    server: {
      port: 9000,
    },
  };
})
