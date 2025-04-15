import { Block, Icon, Link } from 'framework7-react';
import { NotificationDataType } from '../utils';

export const NotifComponent = ({ data }: { data: NotificationDataType[] }) => {
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
                  onClick={() => {
                    document.getElementById(notif.id.toString())?.blur();
                  }}
                >
                  more
                  <Icon f7="chevron_right" icon="text-gradient" size={10} />
                </Link>
              </div>
              <p className="line-clamp-4 overflow-hidden text-ellipsis">{notif.content}</p>
              <p className="text-xs text-gray-500">
                {notif.date} {notif.time}
              </p>
            </Block>
          ))}
          <p className="justify-self-center text-gray-500">Full data loaded.</p>
        </>
      ) : (
        <Block>
          <p className="justify-self-center text-gray-500">No data.</p>
        </Block>
      )}
    </>
  );
};
