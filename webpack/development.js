var webpack = require('webpack')
exports.devServer = function (options) {
    return {
        devServer: {
            port: 3030,
            historyApiFallback: true,
            hot: true,
            inline: true,
            contentBase: 'build'
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    }
}
