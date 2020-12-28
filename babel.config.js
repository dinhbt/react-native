const presets = [
  'babel-preset-expo',
  'module:metro-react-native-babel-preset'
];

const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: { '@': './src' },
    }
  ],
  [
    "import",
    { libraryName: "@ant-design/react-native" }
  ]
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets,
    plugins
  };
};
