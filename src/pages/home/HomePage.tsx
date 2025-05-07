import { Page } from 'framework7-react';
import { useEffect, useState } from 'react';
import { getDevice } from 'framework7';
import HomeCarousel from './components/HomeCarousel';

import { HomeContent, TextCarousel, UserCard } from './components';
import { LoginModal } from '@/components/LoginModal';
import { MobileNavbar } from '@/components/mobile-navbar';
import { f7navigate } from '@/utils/helper';
import Bell from '@/assets/image/svg/bell.svg';

const HomePage = () => {
  const [isTablet, setIsTablet] = useState(false);
  const isMobile = () => {
    const device = getDevice();
    return device.ios || device.android;
  };
  const isSmallDevice = isMobile || isTablet;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 600 && width <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Page className="pb-10">
      {isSmallDevice() && (
        <MobileNavbar
          mode="home"
          navRight={
            <>
              <div
                id="notifications"
                onClick={() => f7navigate('notifications', '/notifications/')}
              >
                <img src={Bell} alt="Notifications" className="h-15 w-15" />
              </div>
            </>
          }
        />
      )}
      <HomeCarousel />
      <div className="space-y-5 rounded-b-[2rem] border-b-2 border-t-0 border-violet-300 p-2 pt-3 shadow-[0_10px_10px_0_rgba(139,92,246,0.3)] lg:border-0 lg:shadow-none">
        <TextCarousel />
        {isSmallDevice() && <UserCard />}
      </div>

      {isSmallDevice() && <HomeContent />}
      {isSmallDevice() && <LoginModal />}
    </Page>
  );
};

export default HomePage;
