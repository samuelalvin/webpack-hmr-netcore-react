module.exports = {
    entry: { "main": "./src/main.tsx" },

    output: {
        filename: "bundle.js",
        path: __dirname + "/wwwroot",
        publicPath: '/',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },

    resolve: {
        extensions: [".tsx", ".js"]
    },

    module: {
        loaders: [
          {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              loaders: ["ts-loader"]
          }
        ]
    }
};