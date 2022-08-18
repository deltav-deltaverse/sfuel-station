// /* config-overrides.js */
// const webpack = require('webpack');
// module.exports = function override(config, env) {
//     config.resolve.fallback = {
//         util: require.resolve('util/'),
//         url: false,
//         assert: require.resolve('assert/'),
//         buffer: false,
//         os: false,
//         http: false,
//         https: false,
//         crypto: require.resolve('crypto-browserify'),
//         stream: false,

//     };
//     config.plugins.push(
//         new webpack.ProvidePlugin({
//             process: 'process/browser',
//             Buffer: ['buffer', 'Buffer'],
//         }),
//     );

//     return config;
// }