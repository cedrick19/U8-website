import { SegmentButtons } from '@/components/SegmentedTabs/type';
import { NotifComponent } from './components';
import { NotificationDataType } from './type';

export const notifications: NotificationDataType[] = [
  {
    id: 1,
    title: 'Update Announcement',
    type: 'system',
    content:
      "This update of H5 and APP not only significantly improved the fluency of the page, making the user's operation more smooth and unimpeded, but also optimized the visual effects of the page, making the interface more beautiful, modern, and more comfortable with the overall use experience.",
    date: '2024-12-12',
    time: '18:29:33',
  },
  {
    id: 2,
    title: 'Important statement: Watch out for counterfeiting platforms',
    type: 'system',
    content:
      'Recently, we found individual platforms posing \nU8 International Subsidiaries\n or affiliated platforms have caused some customers to suffer financial losses on these counterfeit platforms. In this regard, we solemnly declare: \n\n\nU8 International\n There are no subsidiaries or affiliated platforms, any self-proclaimed U8 international flag or associated platforms are \nFraud.\n Members of the General Assembly must be vigilant to avoid being deceived. \n\nAll financial losses that occurred on counterfeit platforms, \nU8 International is not responsible.\n Please make sure you entertain through our official certification platform. \n\n\nThe only official website:\n U8.COM',
    date: '2024-12-07',
    time: '13:55:53',
  },
  {
    id: 3,
    title: 'Tribute to sports members',
    type: 'system',
    content:
      'Sports betting rules and account processing \n\nRisk control and misconduct: \n\nWhen the company makes sports betting, if the wind control system detects any suspicion of shipment, water or protocol ball, we reserve the right to take corresponding measures. This includes, but is not limited to, restricting betting activities, freezing accounts, and canceling related betting.',
    date: '2024-11-16',
    time: '22:05:38',
  },
];

export const notifComponentArray: SegmentButtons[] = [
  {
    tabName: 'All',
    component: <NotifComponent data={notifications} />,
  },
  {
    tabName: 'Newcomer Exclusive',
    component: <NotifComponent data={notifications.filter((n) => n.type === 'newcomer')} />,
  },
  {
    tabName: 'System',
    component: <NotifComponent data={notifications.filter((n) => n.type === 'system')} />,
  },
  {
    tabName: 'Events',
    component: <NotifComponent data={notifications.filter((n) => n.type === 'events')} />,
  },
];
