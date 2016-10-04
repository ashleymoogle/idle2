var webpack = require('webpack')
var validate = require('webpack-validator')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var merge = require('webpack-merge')
var developmentConfig = require('./webpack/development')

var config

var TARGET = process.env.npm_lifecycle_event

var PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
}

var common = {
    entry: {
        app: PATHS.src
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'},
            {from: 'src/index.html', to: 'index.html'}
        ])
    ],
    debug: true,
    resolve: {
        alias: {
            tablesConfig: path.join(__dirname, 'config', TARGET === undefined ? 'localNetwork' : process.env.NODE_ENV || 'development')
        }
    }
}

config = common

if (TARGET === 'build') {
    config = merge.smart(common, {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize: false,
                warnings: false,
                compress: false,
                mangle: true
            })
        ],
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: [ 'rollup' ],
                    exclude: /node_modules/
                }
            ]
        }
    })
}

if ((TARGET === 'start') || (TARGET === undefined)) {
    config = merge(common, developmentConfig.devServer())
}

module.exports = validate(config)
