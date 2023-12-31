import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less']
        }
      }
    },
    // "@storybook/addon-coverage",
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          include: ['**'],
          excludeNodeModules: true,
        },
      },
    },
    {
      name: '@storybook/addon-styling',
      options: {
        less: {
          // Require your Less preprocessor here
          implementation: require('less')
        }
      }
    }, "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: 'tag'
    // defaultName: 'Documentation',
  },

  staticDirs: ["../public"]
};
export default config;