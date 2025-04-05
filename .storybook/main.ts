import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-docs',
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "staticDirs": ['../src/assets/images/'],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag",
  }
};
export default config;