import { Page } from 'framework7-react';
import ProfileNav from '@/pages/profile/component/ProfileNav';
import LabelImgUSD from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/USDT_Recharge.png';
import LabelImgWC from '@/assets/image/profile/more-services/recharge-tutorial/withdrawal-course/Withdrawal_Course.png';
import LabelImgFD from '@/assets/image/profile/more-services/recharge-tutorial/financial-direct/Financia_Direct.png';
import USTDRecharge from './sections/ustd-recharge';
import WithdrawalCourse from './sections/withdrawal-course';
import FinancialDirect from './sections/financial-direct';

const RechargeTutorial = () => {
  return (
    <Page name="recharge-tutorial">
      <ProfileNav title="Recharde Tutorial" />
      <div>
        {/* main */}
        <div className="mx-4 mt-9">
          <span>
            There are two ways to recharge the U8 platform:<br></br>
            1. From external exchanges or wallets with coins USDT to U8 platforms.<br></br>
            2. Copy the financial account in the recharge interface and paste it on a small aircraft
            for direct financial filling.
          </span>
        </div>
        <div className="py-2">
          <img src={LabelImgUSD} alt="Recharge Tutorial" className="mb-3 w-full" />
          <USTDRecharge></USTDRecharge>
        </div>
        <div>
          <img src={LabelImgFD} alt="Recharge Tutorial" className="mb-3 w-full" />
          <FinancialDirect></FinancialDirect>
        </div>
        <div>
          <img src={LabelImgWC} alt="Recharge Tutorial" className="mb-3 w-full" />
          <WithdrawalCourse></WithdrawalCourse>
        </div>
        <div className="text-center">
          <p className="mb-12 mt-12">End</p>
        </div>
      </div>
    </Page>
  );
};

export default RechargeTutorial;
