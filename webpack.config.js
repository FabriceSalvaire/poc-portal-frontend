/***************************************************************************************************
 *
 *  — 
 * Copyright (C) 2020 Fabrice Salvaire
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 **************************************************************************************************/

// https://webpack.js.org/concepts
// https://webpack.js.org/concepts/configuration

/**************************************************************************************************/

// const NODE_ENV = process.env.NODE_ENV || 'production';
// const NODE_ENV = 'production';
const NODE_ENV = 'development';

const is_development = NODE_ENV === 'development';

// set default Babel preset
if (!process.env.BABEL_ENV)
    process.env.BABEL_ENV = 'latest-browser';
console.log('Babel will use', process.env.BABEL_ENV);

/**************************************************************************************************/

var path = require('path');

const webpack = require('webpack');

// https://github.com/FormidableLabs/webpack-dashboard
// run using : npx webpack-dashboard webpack ...
const DashboardPlugin = require('webpack-dashboard/plugin');

// https://github.com/webpack-contrib/mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// https://github.com/jantimon/html-webpack-plugin
const HtmlWebPackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/***************************************************************************************************
 *
 * Babel Configuration
 *
 */

// https://babeljs.io/docs/en/config-files
// https://github.com/babel/babel/blob/master/packages/babel-preset-stage-2/README.md
const babel_config = {
    babelrc: false,

    env: {
        'latest-browser': {
            presets: [
                ['@babel/preset-env', {
                    targets: {
                        // browsers: ['last 2 versions']
                        'firefox': '65',

                    },
                    useBuiltIns: 'entry',
                    corejs: 3,
                }],
                '@babel/preset-react',
                //! 'minify', // https://github.com/babel/minify
            ],
            plugins: [
                // '@babel/plugin-transform-runtime',

                // Stage 2
                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-throw-expressions',

                // Stage 3
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-syntax-import-meta',
                ['@babel/plugin-proposal-class-properties', { 'loose': false }],
                '@babel/plugin-proposal-json-strings',

                // Stage 4
                '@babel/plugin-proposal-object-rest-spread',

                // [
                //     'react-intl', {
                //      'messagesDir': './build/messages',
                //      'enforceDescriptions': false
                //     }
                // ]
            ]
        },
    }
}

/***************************************************************************************************
 *
 * Boostrap Compilation
 *
 */

/**************************************************************************************************
 *
 * CSS
 *
 */

const css_loader_options = (() => {
    return {
        importLoaders: 1, // number of loaders before css-loader
    }

    // if (is_development)
    //  return {
    //  }
    // else
    //  return {
    //  }
})();


// cf. postcss.config.js
const postcss_options = {};


const css_loaders = [
    // scss files > sass-loader > postcss-loader > css-loader > MiniCssExtractPlugin

    {
        // https://github.com/webpack-contrib/extract-text-webpack-plugin
        loader: MiniCssExtractPlugin.loader,
        options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            // publicPath: '../'
        }
    },

    // Creates style nodes from JS strings
    // https://webpack.js.org/loaders/style-loader
    // 'style-loader',

    {
        // translates CSS into CommonJS
        // https://github.com/webpack-contrib/css-loader
        loader: 'css-loader',
        options: css_loader_options
    },

    {
        // https://postcss.org — Autoprefixer ...
        // https://github.com/postcss/postcss-loader
        loader: 'postcss-loader',
        // use postcss.config.js
        // options: postcss_options
    },

    {
        // compiles Sass to CSS, using Node Sass by default
        // https://github.com/sass/node-sass
        // https://github.com/webpack-contrib/sass-loader
        loader: 'sass-loader',
        options: {
            // outputStyle: 'expanded',
            // precision: 6,
        }
    },
];


const html_webpack_plugin_config = {
    // https://github.com/jantimon/html-webpack-plugin
    // https://ejs.co — Embedded JavaScript templating
    template: './src/index.ejs',
    // filename: 'index.html',
    title: 'Portal',
    // https://github.com/jantimon/html-webpack-plugin/blob/master/examples/template-parameters/webpack.config.js
    templateParameters: (compilation, assets, assetTags, options) => {
        // console.log(compilation);
        // console.log(compilation.options);
        // console.log(assets);
        // console.log(assetTags);
        // console.log(options);
        return {
            htmlWebpackPlugin: {
                options,   // HtmlWebpackplugin options
                tags: assetTags,
                files: assets,
            },
            webpack_config: compilation.options,
        };
    },
    // minify: true,
    minify: false,
};

/**************************************************************************************************/

let config = {
    mode: NODE_ENV,

    entry: {
        app: './src/js/index.jsx'
    },

    output: {
        // publicPath: ,
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },

    module: {
        rules: [
            { // Match .js(x)
                test: /\.(js(x))$/,
                exclude: /(node_modules|packages)/,
                // https://github.com/babel/babel-loader
                loader: 'babel-loader',
                options: babel_config,
            },

            { // Match .html
                test: /\.html$/,
                // https://webpack.js.org/loaders/html-loader
                loader: 'html-loader',
            },

            { // Match .css and .scss
                test: /\.(s*)css$/,
                use: css_loaders,
            },

            {
                test: /\.(svg)$/,
                loader: 'file-loader',
            },

            {
                test: /\.(jpe?g|png|webp)$/i,
                // https://www.npmjs.com/package/responsive-loader
                loader: 'responsive-loader',
                options: {
                    adapter: require('responsive-loader/sharp'),
                }
            },
        ]
    },

    externals: {
        jquery: 'jQuery',
    },

    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery'
        // }),
        new HtmlWebPackPlugin(html_webpack_plugin_config),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new DashboardPlugin(),
    ],

    // https://webpack.js.org/configuration/dev-server
    devServer: {
        historyApiFallback: true,
        // port: 9000, // default is 8080
    },

    watchOptions: {
        aggregateTimeout: 10000,
        poll: 1000, // Check for changes every second
    },

    // stats: 'verbose',
    stats: 'normal',

    // colors: {
    //  black: '\u001b[30m',
    //  blue: '\u001b[34',
    //  cyan: '\u001b[36',
    //  green: '\u001b[32',
    //  magenta: '\u001b[35',
    //  red: '\u001b[31',
    //  white: '\u001b[37',
    //  // yellow: '\u001b[33',
    //  yellow: '\u001b[31',
    // },
};

/**************************************************************************************************/

if (is_development){
    // Development configuration values

    config.devtool = 'source-map';
} else {
    // Production configuration values

    config.output.filename = 'js/app.min.js';

    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                // 'NODE_ENV': JSON.stringify('production'),
                PRODUCTION: JSON.stringify(true),
            }
        })
    );

    // Fixme: works ???
    // remove all debug and console code
    // config.module.rules.push(
    //  {
    //      test: /\.min\.js$/,
    //      use: {
    //          loader: 'webpack-strip',
    //          options: {
    //              strip: ['console.log', 'console.info', 'debug']
    //          }
    //      }
    //  }
    // );

    config.devtool = 'sourcemap';
}

/**************************************************************************************************/

// now export our collated config object
module.exports = config;
