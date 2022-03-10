module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/assets/*': './src/assets/*',
          '@/components/*': './src/components/*',
          '@/constants/*': './src/constants/*',
          '@/navigation/*': './src/navigation/*',
          '@/redux/*': './src/redux/*',
          '@/screens/*': './src/screens/*',
          '@/services/*': './src/services/*',
          '@/themes/*': './src/themes/*',
          '@/utils/*': './src/utils/*',
        },
      },
    ],
  ],
};
