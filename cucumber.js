module.exports = {
  default: {
    requireModule: [
      'ts-node/register',
    ],
    format: [
      '@serenity-js/cucumber',
    ],
    require: [
      './src/**/*.steps.ts',
      './src/**/*.config.ts',
    ],
    paths: [
      'src/test/features/**/*.feature',
    ],
    tags: '@apiReqRes',
  }
};