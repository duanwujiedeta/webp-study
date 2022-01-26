module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'// 用来设置输出的文件名
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    },
                ],
                type: 'javascript/auto',// 资源管理，使用auto的话则可以由 webpack 来自动检测资源以使用
                //  dependency: { not: ['url'] }, // 排除的资源
            },
            {
                test: /\.html/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'// 真对特定的 test 输出设置文件名
                }
            }
        ]
    },
}