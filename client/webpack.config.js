const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          "@rneui/base/dist",
          "@rneui/themed/dist",
        ],
      },
    },
    argv
  );
  return config;
};
