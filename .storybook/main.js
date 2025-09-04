import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    // Make pnpm-linked deps resolvable in CI
    config.resolve = { ...(config.resolve || {}), preserveSymlinks: true };

    // Help rollup resolve Storybook preview entry under some module trees
    const external = (config.build?.rollupOptions?.external || []);

    // Force-resolve Storybook preview entries under pnpm to avoid unresolved imports in CI
    try {
      const entryPreview = require.resolve('@storybook/react/dist/entry-preview.mjs');
      const entryPreviewDocs = require.resolve('@storybook/react/dist/entry-preview-docs.mjs');
      config.resolve = {
        ...(config.resolve || {}),
        alias: {
          ...(config.resolve?.alias || {}),
          '@storybook/react/dist/entry-preview.mjs': entryPreview,
          '@storybook/react/dist/entry-preview-docs.mjs': entryPreviewDocs,
        },
      };
    } catch {}
    const build = {
      ...(config.build || {}),
      rollupOptions: {
        ...(config.build?.rollupOptions || {}),
        external: Array.isArray(external)
          ? [...external]
          : external,
      },
    };

    // Speed up deps resolution when running in CI
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: [
        '@storybook/react',
        '@storybook/theming',
      ],
    };

    return { ...config, build };
  },
};
