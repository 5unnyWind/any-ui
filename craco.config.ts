import path from "path";
import fs from "fs";
import cracoBabelLoader from "craco-babel-loader";

// Handle relative paths to sibling packages
const appDirectory = fs.realpathSync(process.cwd());
const resolvePackage = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    configure: (webpackConfig: {
      resolve: { plugins: { constructor: any }[] };
    }) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === "ModuleScopePlugin"
      );
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: cracoBabelLoader,
      options: {
        includes: [resolvePackage("./components")],
      },
    },
  ],
};

export {};
