module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

// possibly need react-native-reanimated/plugin ("plugins list") (https://github.com/FormidableLabs/victory-native-xl)