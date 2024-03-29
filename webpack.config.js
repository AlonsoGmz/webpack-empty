const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
 
    mode: 'development', // Se usa mientras queramos un codigo con nuestros comentarios y NO ufuscado o minimizado
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
            
        ]
    },
    plugins: [
         new HtmlWebPackPlugin({
             title: 'Mi Webpack',
             template: 'src/index.html'
         }),

         new MiniCssExtractPlugin({
             filename: 'nuevo-css.css'
         }),

         new CopyPlugin({
             patterns: [
                {from: 'src/assets/', to: 'assets/'}
             ]
         })
         
    ]
 
 
}