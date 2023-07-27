// const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
// const svgr = require('@svgr/rollup').default;

module.exports = config => {
  // const nxConfig = nrwlConfig(config);
  return {
    // ...nxConfig,
    // plugins: [...nxConfig.plugins, svgr()],
    preserveModules: true, // indicate not create a single-file
    ...config,
  };
};
