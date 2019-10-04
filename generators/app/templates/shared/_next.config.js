const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

let config = withSass({
    exportPathMap: () => {
        return {};
    },
    cssModules: false,
    distDir: 'dist/.next',
    assetPrefix: isProd ? '<%= app.cdnPrefix %>' : '',
    webpack: function(config) {
        config.plugins.push(
            new webpack.EnvironmentPlugin({
                IS_PROD: isProd,
            }),
        );
        config.plugins.push(new webpack.IgnorePlugin(/^server/));
        return config;
    },
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: 'static',
            reportFilename: 'server.html',
        },
        browser: {
            analyzerMode: 'static',
            reportFilename: 'client.html',
        },
    },
});

if (process.env.BUNDLE_ANALYZE) {
    console.log('analyze!');
    config = withBundleAnalyzer(config);
}

module.exports = config;
