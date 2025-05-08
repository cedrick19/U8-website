import { Block, Icon, Link } from 'framework7-react';
import { NotificationDataType } from '@/pages/notifications/type';
import { f7navigate } from '@/utils/helper';

export const NotifComponent = ({ data }: { data: NotificationDataType[] }) => {
  const formatting = (content: string) => {
    return content.split('\n\n').map((para, ids) => (
      <span key={ids}>
        {para.split('\n').map((part, idk) =>
          idk % 2 === 1 ? (
            <span key={idk} className="font-bold">
              {part}
            </span>
          ) : (
            <span key={idk}>{part}</span>
          ),
        )}
      </span>
    ));
  };

  return (
    <>
      {data.length !== 0 ? (
        <>
          {data.map((notif) => (
            <Block key={notif.id} className="flex flex-col gap-6 rounded-3xl bg-white py-5">
              <div className="flex flex-row justify-between">
                <p className="text-gradient font-bold">{notif.title}</p>
                <Link
                  href={`/notifications/${notif.id}/`}
                  className="text-gradient flex flex-row items-center"
                  id={notif.id}
                  onClick={() => f7navigate(notif.id.toString(), `/notifications/${notif.id}/`)}
                >
                  more
                  <Icon f7="chevron_right" icon="text-gradient" size={10} />
                </Link>
              </div>
              <p className="line-clamp-4 overflow-hidden text-ellipsis">
                {formatting(notif.content)}
              </p>
              <p className="text-xs text-gray-500">
                {notif.date} {notif.time}
              </p>
            </Block>
          ))}
          <p className="text-center text-gray-500">Full data loaded.</p>
        </>
      ) : (
        <Block>
          <p className="text-center text-gray-500">No data.</p>
        </Block>
      )}
    </>
  );
};
