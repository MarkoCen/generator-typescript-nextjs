const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

const isProd = process.env.NODE_ENV === 'production';

const cdnUrl = '<%= app.cdnPrefix %>';

module.exports = withFonts(
  withCSS(
    withSass({
      poweredByHeader: false,
      env: {
        NEXTJS_ENV: process.env.NODE_ENV,
        PUBLIC: isProd ? `${cdnUrl}/public` : '',
      },
      assetPrefix: isProd ? cdnUrl : '',
      cssModules: false,
      postcssLoaderOptions: {
        parser: true,
        config: {},
      },
    }),
  ),
);
