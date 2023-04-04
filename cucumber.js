let common = [
  'cucumber/features/**/*.feature',
  '--require-module ts-node/register',
  '--require-module jsdom-global/register',
  '--require cucumber/loaders.ts',
  '--require cucumber/dotenv.ts',
  '--require cucumber/configure-jsdom.js',
  '--require cucumber/mock-server-listen.ts',
  '--require cucumber/step-definitions/**/*.ts',
  '--require cucumber/step-definitions/**/*.tsx',
  '--format progress-bar',
  '--publish-quiet',
  // '--format cucumber-pretty'
].join(' ');

module.exports = {
  default: common,
  // More profiles can be added if desired
};
