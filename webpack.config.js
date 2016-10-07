module.exports = {
  entry: './src/main.js',
  output: {
    filename: '/bundle.js'
  },
  devtool: "sourcemaps",
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less'
       },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};
