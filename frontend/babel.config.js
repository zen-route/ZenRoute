module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-reanimated/plugin', {version: '3.5.4'}],
    // [
    //   'module:react-native-dotenv',
    //   {
    //     moduleName: 'react-native-dotenv',
    //     verbose: false,
    //   },
    // ],
  ],
};
