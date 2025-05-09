export const serviceWorkerReg = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const serviceWorkerUrl =
        process.env.NODE_ENV !== 'development' ? '/service-worker.js' : '/sampleSw.js';

      navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then((registration) => {
          console.log('Service worker registered: ', registration.scope);
        })
        .catch((e) => {
          console.error('Service worker registration failed: ', e);
        });
    });
  }
};
