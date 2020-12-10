module.exports = function (config) {
  config.addPassthroughCopy({ 'src/assets/scripts': 'js' });
  config.addPassthroughCopy({ 'src/assets/images': 'img' });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
