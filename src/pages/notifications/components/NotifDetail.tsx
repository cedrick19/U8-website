import { Block, Page } from 'framework7-react';
import { Router } from 'framework7/types';
import { notifications } from '../utils';
import { NotifNav } from './NotifNavbar';

export const NotifDetail = ({ f7route }: { f7route: Router.Route }) => {
  const notifId = Number(f7route.params.id);
  const notif = notifications.find((n) => n.id === notifId);

  const formatting = (content: string) => {
    return content.split('\n\n').map((para, ids) => (
      <p key={ids}>
        {para.split('\n').map((part, idk) =>
          idk % 2 === 1 ? (
            <span key={idk} className="font-bold">
              {part}
            </span>
          ) : (
            <span key={idk}>{part}</span>
          ),
        )}
      </p>
    ));
  };

  return (
    <Page name="notif-detail">
      <NotifNav title="Notification Details" />
      <Block>
        <Block className="flex flex-col gap-6 rounded-3xl bg-white py-5">
          {notif && (
            <>
              <div className="flex flex-row justify-between">
                <p className="text-gradient font-bold">{notif.title}</p>
              </div>
              {formatting(notif.content)}
              <p className="text-xs text-gray-500">
                {notif.date} {notif.time}
              </p>
            </>
          )}
        </Block>
      </Block>
    </Page>
  );
};
