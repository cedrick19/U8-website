module.exports = {
  globDirectory: 'www/',
  globPatterns: ['**/*.{woff,woff2,js,css,png,jpg,jpeg,JPG,svg,SVG,html}'],

  /* pass array of globs to exclude from caching */
  globIgnores: [],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'www/service-worker.js',
};
