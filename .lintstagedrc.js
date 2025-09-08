// @ts-check

/** @type {import('lint-staged').Config} */
const config = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'npm run ts',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|js)?(x)': filenames => [`eslint --fix ${filenames.join(' ')}`],
};

module.exports = config;
