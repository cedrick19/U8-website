module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,webp,avif,ico,woff,woff2}"],
  globIgnores: [],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'dist/service-worker.js',
};