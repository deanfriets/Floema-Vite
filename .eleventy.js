const path = require('path');
const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');
const Image = require('@11ty/eleventy-img');
const glslifyPlugin = require('vite-plugin-glslify').default;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      root: 'src',

      plugins: [glslifyPlugin()],
      resolve: {
        alias: {
          '@styles': path.resolve('.', '/src/styles'),
          '@app': path.resolve('.', '/src/app'),
          '@utils': path.resolve('.', '/src/app/utils'),
          '@components': path.resolve('.', '/src/app/components'),
          '@shaders': path.resolve('.', '/src/app/shaders'),
          '@classes': path.resolve('.', '/src/app/classes'),
          '@animations': path.resolve('.', '/src/app/animations'),
          '@pages': path.resolve('.', '/src/app/pages'),
          '@canvas': path.resolve('.', '/src/app/components/Canvas'),
        },
      },
    },
  });

  eleventyConfig.addPassthroughCopy('src/app');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/styles');

  eleventyConfig.setServerPassthroughCopyBehavior('copy');

  return {
    dir: {
      input: 'src/views',
      output: '_site',
    },
  };
};
