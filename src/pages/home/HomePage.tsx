import { Page } from 'framework7-react';
import { HomeContent, TextCarousel, UserCard, HomeCarousel } from './components';
import { LoginModal } from '@/components/LoginModal';
import { MobileNavbar } from '@/components/mobile-navbar';
import { f7navigate } from '@/utils/helper';
import Bell from '@/assets/image/svg/bell.svg';
import useIsSmallDevice from './components/useIsSmallDevice';

const HomePage = () => {
  const isSmallDevice = useIsSmallDevice();

  const NotificationButton = () => {
    f7navigate('notifications', '/notifications/');
  };

  return (
    <Page className="pb-10">
      {isSmallDevice && (
        <MobileNavbar
          mode="home"
          navRight={
            <div id="notifications" onClick={NotificationButton}>
              <img src={Bell} alt="Notifications" className="h-15 w-15" />
            </div>
          }
        />
      )}
      <HomeCarousel />
      <div className="space-y-5 rounded-b-[2rem] border-t-0 p-2 pt-3 shadow-xl shadow-[#8b5cf64d] lg:border-0 lg:shadow-none">
        <TextCarousel />
        {isSmallDevice && <UserCard />}
      </div>
      {isSmallDevice && (
        <>
          <HomeContent />
          <LoginModal />
        </>
      )}
    </Page>
  );
};

export default HomePage;
