module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "assets": "./src/assets",
          "components": "./src/components",
          "navigation": "./src/navigation",
          "services": "./src/services",
          "themes": "./src/themes",
          "utils": "./src/utils",
          "views": "./src/views",
        }
      }
    ]
  ]
};
