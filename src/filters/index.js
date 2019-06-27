import camelCase from "lodash/camelCase";

const requireModule = require.context(".", false, /\.js$/),
  modules = [];

requireModule.keys().forEach(fileName => {
  if (fileName !== "./index.js") {
    const name = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

    modules.push({ name, file: requireModule(fileName).default });
  }
});

export default modules;
