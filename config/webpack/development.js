const environment = require('./environment');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = environment.toWebpackConfig();

// For more information, see https://webpack.js.org/configuration/devtool/#devtool
config.devtool = 'eval-source-map';

// Add Bundle Analyzer plugin
config.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: './report.html',
    openAnalyzer: true
  })
);

module.exports = config;
