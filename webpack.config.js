const sassPath = path.join(__dirname, './src/index.scss')

module.exports = {
  module: {
    test: /\.scss$/i,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, sassPath),
            ],
          },
          prependData: `        
                    @import "${path.resolve(__dirname, sassPath)}";
                `,
        },
      },
    ],
  },
};