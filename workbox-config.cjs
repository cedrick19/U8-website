module.exports = {
  globDirectory: "www/",
  globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,webp,avif,ico,woff,woff2,ttf}"],
  globIgnores: ['**/sampleSw.js', 'sampleSw.js', '**/sampleSw.*'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'www/service-worker.js',
  navigateFallback: '/index.html',
  navigateFallbackDenylist: [/^\/_/, /\/[^\/]+.[^\/]+$/],
};