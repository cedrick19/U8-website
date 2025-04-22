import { Fragment } from 'react';
import { cn } from '@/globals/utils';
import { TableRatio } from '@/pages/profile/more-services/game-management/return-ratio-details/type';

const RatioTable = (props: TableRatio) => {
  const { gridHeader, gridBody } = props;
  return (
    <div className="grid grid-cols-4 rounded-lg border-2 border-b-2 border-black bg-[#F7FBFF]">
      {gridHeader.map((data, index) => (
        <div
          key={index}
          className={cn(
            'col-span-1 border-b-2 p-1 text-center text-xs font-bold',
            gridHeader.length === index + 1 ? '' : 'border-r-2',
          )}
        >
          {data}
        </div>
      ))}
      {gridBody.map(({ gamePlatform, gameContents }, gridIndex) => (
        <Fragment key={gridIndex}>
          <div
            className={cn(
              'flex w-full items-center justify-center border-b-2 border-r-2 text-center text-xs',
              gridBody.length !== gridIndex + 1 ? 'border-b-2' : 'rounded-bl-lg',
            )}
          >
            {gamePlatform}
          </div>
          <div className="col-span-3 rounded-br-lg">
            <div className="grid grid-cols-3 rounded-br-lg bg-white font-bold">
              {gameContents?.map((item, index) => {
                const isLast =
                  gameContents?.length === index + 1 && gridBody.length === gridIndex + 1;
                return (
                  <Fragment key={index}>
                    <div className={cn('w-full border-b-2 border-r-2 text-center', 'py-2')}>
                      {item?.backToTheWaterLadder ?? '-'}
                    </div>
                    <div
                      className={cn('w-full border-b-2 border-r-2 text-center', 'py-2 font-bold')}
                    >
                      {item?.totalNumberOfYards ?? '-'}
                    </div>
                    <div
                      className={cn(
                        'w-full border-b-2 text-center text-green-300',
                        'py-2',
                        isLast ? 'rounded-br-lg' : '',
                      )}
                    >
                      {item?.waterReturnRatio}%
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default RatioTable;
