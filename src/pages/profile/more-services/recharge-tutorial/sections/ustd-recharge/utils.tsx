import StepOne from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/Step_1.png';
import USDTImage1 from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/USDT_1.png';
import StepTwo from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/Step_2.png';
import USDTImagetwo1 from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/USDT_2_1.png';
import USDTImagetwo2 from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/USDT_2_2.png';
import USDTImagetwo3 from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/USDT_2_3.png';
import USDTImagetwo4 from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/USDT_2_4.png';
import USDTImagetwo5 from '@/assets/image/profile/more-services/recharge-tutorial/ustd-recharge/USDT_2_5.png';
export const PageContent = [
  {
    pageTitleImg: StepOne,
    title: 'Get a two-dimensional code or',
    subs: [
      {
        img: USDTImage1,
        label: 'Page1',
        description:
          '1. Click on the homepage after logging in to the platform account Recharge button.\n' +
          '2. Select USDT recharge on the recharge page.\n' +
          '3. Pay attention to the choice of recharge network, choose here TRC20.\n' +
          '(Note: TRC20 and ERC20 are just the difference between transfer time and handling fee)\n' +
          '4. The screenshot holds the following two-dimensional code or copying address to the exchange to withdraw coinst.\n',
      },
    ],
  },
  {
    pageTitleImg: StepTwo,
    title: 'Lit currency on the exchange',
    subs: [
      {
        img: USDTImagetwo1,
        label: 'Page2',
        description:
          '1. Open a wallet or exchange (OKX as an example) to find coin raising or cashing functions.\n' +
          '2. Choose to withdraw digital currency.',
      },
      {
        img: USDTImagetwo2,
        label: 'Page2',
        description: '3. Choose currency-choose USDT\n' + '4. Choose the coin on the chain.',
      },
      {
        img: USDTImagetwo3,
        label: 'Page2',
        description: '5. Open the small aircraft UI.\n' + '6. Find the financial fill input.',
      },
      {
        img: USDTImagetwo4,
        label: 'Page2',
        description:
          '1. Paste Address obtained at the U8 recharge interface.\n' +
          '2. Coin raising network must choose TRC20.',
      },
      {
        img: USDTImagetwo5,
        label: 'Page2',
        description:
          '7. Enter the transfer amount, confirm the information without error, and submit it by point.\n' +
          '(Note: The U8 platform stipulates a minimum recharge amount of 100 USDT) \n' +
          "8. Enter the mailbox and Google's security verification to determine the coin.",
      },
    ],
  },
];
