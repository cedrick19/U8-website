import {
  TableArray,
  TableIndex,
} from '@/pages/profile/more-services/game-management/return-ratio-details/type';

export const lastCell = (
  obj: object | Array<object>,
  index: number,
  isBoolean: boolean = true,
  cn?: string,
): string | boolean => {
  const objVal = typeof obj === 'object' ? Object.values(obj) : obj;
  switch (isBoolean) {
    case false:
      if (objVal.length === index + 1) {
        return cn as string;
      } else {
        return '';
      }
    case true:
      return objVal.length === index + 1 && true;
  }
};
export const lastRowCell = (arr: TableArray, x: TableIndex, cn: string) => {
  const { body, gameContent, cellObj } = arr;
  const { gridIndex, gameIndex, index } = x;
  if (lastCell(body, gridIndex) && lastCell(gameContent, gameIndex) && lastCell(cellObj, index))
    return cn;
};
