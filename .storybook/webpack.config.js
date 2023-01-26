const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  // config.module.rules.push({ test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" });
  config.module.rules.push({
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  })
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: "babel-loader",
    exclude: /node_modules/,
    options: {
      presets: ["@babel/preset-typescript", "@babel/preset-react"]
    }
  })
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src'),
  }
  return config;
}