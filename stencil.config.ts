import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import postcssReporter from 'postcss-reporter';
import postcssPresetEnv from 'postcss-preset-env';
import postcssUrl from 'postcss-url';

export const config: Config = {
  buildEs5: false,
  sourceMap: true,
  globalStyle: 'src/styles/global.css',
  plugins: [
    postcss({
      plugins: [
        postcssUrl(),
        postcssPresetEnv({ stage: 0 }),
        postcssReporter()
      ]
    })
  ],
  namespace: 'stencil-inspector',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: false,
      copy: [
        {
          src: 'statics/**/**',
          dest: '.'
        },
        {
          src: 'images/**/**'
        },
      ]
    }
  ]
};
