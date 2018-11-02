const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:"./src/app.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            
        })
    ]
}