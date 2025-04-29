import { Fragment } from 'react';
import { cn } from '@/utils/helper';
import {
  GameContent,
  GridBody,
  TableRatio,
} from '@/pages/profile/more-services/game-management/return-ratio-details/type';
import { lastCell, lastRowCell } from './utils';

const RatioTable = (props: TableRatio) => {
  const { gridHeader, gridBody } = props;
  const renderHeader = (header: string[]) => {
    return header.map((data, index) => (
      <div
        key={index}
        className={cn(
          'col-span-1 border-b-2 p-1 text-center text-xs font-bold',
          lastCell(gridHeader, index) ? '' : 'border-r-2',
        )}
      >
        {data}
      </div>
    ));
  };
  const renderGameContent = (gameContent: GameContent, body: GridBody[], gridIndex: number) => {
    return (
      <div className="col-span-3 rounded-br-lg">
        <div className="grid grid-cols-3 rounded-br-lg bg-white font-bold">
          {gameContent.map((item, gameIndex) => {
            const cellObj = Object.values(item);
            return cellObj.map((x, index) => (
              <div
                key={index}
                className={cn(
                  'w-full border-b-2 border-r-2 py-2 text-center text-xs',
                  lastCell(item, index, false, 'text-green-300'),
                  lastRowCell(
                    { body, gameContent, cellObj },
                    { gridIndex, gameIndex, index },
                    'rounded-br-lg',
                  ),
                )}
              >
                {`${x}${lastCell(item, index, false, '%')}`}
              </div>
            ));
          })}
        </div>
      </div>
    );
  };
  const renderGamePlatform = (gamePlatform: string, x: number, y: number) => {
    return (
      <div
        className={cn(
          'flex w-full items-center justify-center border-b-2 border-r-2 text-center text-xs',
          x !== y + 1 ? 'border-b-2' : 'rounded-bl-lg',
        )}
      >
        {gamePlatform}
      </div>
    );
  };
  const renderGridBody = (body: GridBody[]) => {
    return body.map(({ gamePlatform, gameContents }, gridIndex) => (
      <Fragment key={gridIndex}>
        {renderGamePlatform(gamePlatform, body.length, gridIndex)}
        <div className="col-span-3 rounded-br-lg">
          <div className="grid grid-cols-3 rounded-br-lg bg-white font-bold">
            {renderGameContent(gameContents, body, gridIndex)}
          </div>
        </div>
      </Fragment>
    ));
  };

  return (
    <div className="grid grid-cols-4 rounded-lg border-2 border-b-2 border-black bg-[#F7FBFF]">
      {renderHeader(gridHeader)}
      {renderGridBody(gridBody)}
    </div>
  );
};

export default RatioTable;
