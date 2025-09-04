export default {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    // Make pnpm-linked deps resolvable in CI
    config.resolve = { ...(config.resolve || {}), preserveSymlinks: true };

    // Help rollup resolve Storybook preview entry under some module trees
    const external = (config.build?.rollupOptions?.external || []);
    const build = {
      ...(config.build || {}),
      rollupOptions: {
        ...(config.build?.rollupOptions || {}),
        external: Array.isArray(external)
          ? [...external, '@storybook/react/dist/entry-preview.mjs']
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
