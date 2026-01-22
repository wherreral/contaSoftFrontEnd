//import webpack from 'webpack';
//import htmlWebpackPlugin from 'html-webpack-plugin';
//import LiveReloadPlugin from 'webpack-livereload-plugin';
const path = require('path');
const resolve = require('path').resolve;



module.exports = {
    mode: 'development',
    entry:{
        //index: ['regenerator-runtime/runtime','./src/client/index.js'],
        index : './src/client/index.js',
        login: './src/client/login.js',
        dashboard: './src/client/dashboard.js',
        newtaxpayer: './src/client/newtaxpayer.js',
        api: ['regenerator-runtime/runtime','./src/client/functions/api.js']
    },
    output: {
        path:path.join(__dirname, './src/public/dist'),//__dirname + '/build',//path.resolve(__dirname, '/dist'),
        //filename: 'bundle.js',
        filename: '[name].js',
        publicPath: '/src/public/dist'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use:['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\newtaxpayer.js$/,
                include: /node_modules/,
                type: "javascript/auto"
            }//,
            /*{
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader', options: {
                            sourceMap:true
                        }
                    },
                    {
                        loader: 'sass-loader', options: {
                            sourceMap:true
                        }
                    }
                ]
            }*/
        ]
    },
    resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
    plugins: [
      //  new htmlWebpackPlugin({
        //    template: './src/client/index.html'
        //}),
        //new LiveReloadPlugin()
    ]
};
