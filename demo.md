安装  
1 npm i --save-dev webpack  
2 npm install --save-dev html-webpack-plugin  
让插件给你生成一个html文件 (https://webpack.docschina.org/plugins/html-webpack-plugin/#src/components/Sidebar/Sidebar.jsx)  
3 npm install babel-loader babel-core babel-preset-env  (https://webpack.docschina.org/loaders/babel-loader/#src/components/Sidebar/Sidebar.jsx)  
4 npm install  css-loader style-loader --save-dev  
5 npm install --save-dev extract-text-webpack-plugin
它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件（即 styles.css）当中。 如果你的样式文件大小较大，这会做更快提前加载，因为 CSS bundle 会跟 JS bundle 并行加载。(https://webpack.docschina.org/plugins/extract-text-webpack-plugin/#src/components/Sidebar/Sidebar.jsx)  
6 提取 Sass 或 LESS(https://webpack.docschina.org/plugins/extract-text-webpack-plugin/#提取-sass-或-less)  
npm install sass-loader node-sass --save-dev
俩者相结合使用  
7 图片配置
url-loader(https://webpack.docschina.org/loaders/url-loader/#src/components/Sidebar/Sidebar.jsx)和file-loader(https://webpack.docschina.org/guides/asset-management/#加载图片)  
8字体图标npm i font-awesome  
9webpack-dev-server 提供一个web服务 并为它自动刷新
npm i webpack-dev-server
10 npm i babel-preset-react@6.24.1 --dev
在webpack.config.js  module-rules-use-option 加入react(或者新建一个.babelrc)  
11 npm install --save react@16.2.0 react-dom@16.2.0
12 npmi i --save-dev react-router-dom@4.2.2



命令
node_modules/.bin/webpack 
node_modules/.bin/webpack-dev-server(低版本)



index.html直接饮用的cdn
https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css
https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css(可以 npm remove font-awesome)




