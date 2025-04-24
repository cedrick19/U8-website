import { Block, Page } from 'framework7-react';
import { Router } from 'framework7/types';
import { support } from '../utils';
// import { SupportNav } from './SupportNavbar';

export const SupportDetail = ({ f7route }: { f7route: Router.Route }) => {
  const notifId = Number(f7route.params.id);
  const notif = support.find((n) => n.id === notifId);

  const formatting = (content: string) => {
    return content.split('\n\n').map((para, ids) => (
      <p key={ids} className="whitespace-pre-line">
        {para.split('\n').map((part, idk) =>
          idk % 2 === 1 ? (
            <strong key={idk} className="font-bold">
              {part}
            </strong>
          ) : (
            <span key={idk}>{part}</span>
          ),
        )}
      </p>
    ));
  };

  return (
    <Page name="notif-detail">
      {/* <SupportNav title="Notification Details" /> */}
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
