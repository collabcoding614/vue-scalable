import camelCase from "lodash/camelCase";

const requireModule = require.context(".", false, /\.js$/),
  modules = {};

requireModule.keys().forEach(fileName => {
  if (fileName !== "./index.js") {
    const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

    modules[moduleName] = requireModule(fileName).default;
  }
});

export default modules;
