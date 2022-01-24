const path = require('path');

module.exports = (env) => {
    console.log('Goal: ', env.goal); // 'local'
    console.log('Production: ', env.production); // true
    return {
        mode: 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'webpack-numbers.js',
            library: {
                name: 'webpackNumbers',
                type: 'umd',
            }
        },
        externals: {
            lodash: {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                amd: 'lodash',
                root: '_',
            }
        },
    };
}