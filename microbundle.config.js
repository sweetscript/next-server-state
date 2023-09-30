import preserveDirectives from 'rollup-plugin-preserve-directives';

module.exports = {
  rollup: {
    output: {
      preserveModules: true
    },
    plugins: [preserveDirectives()]
  }
};
