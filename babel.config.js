'use strict';

module.exports = function(api) {
  api.cache(true);

  const presets = [];
  const plugins = ['./src'];

  return {
    presets,
    plugins,
  };
};
