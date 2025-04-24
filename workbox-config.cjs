module.exports = {
  globDirectory: "www/",
  globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,webp,avif,ico,woff,woff2}"],
  globIgnores: [],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'www/service-worker.js',
};