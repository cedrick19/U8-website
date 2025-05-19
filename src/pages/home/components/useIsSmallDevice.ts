import { useState, useEffect, useCallback } from 'react';
import { getDevice } from 'framework7';

const useIsSmallDevice = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const checkDeviceSize = useCallback(() => {
    const isMobile = getDevice().ios || getDevice().android;
    setIsSmallDevice(isMobile);
  }, []);

  useEffect(() => {
    checkDeviceSize();
    window.addEventListener('resize', checkDeviceSize);
    return () => window.removeEventListener('resize', checkDeviceSize);
  }, [checkDeviceSize]);

  return isSmallDevice;
};

export default useIsSmallDevice;
