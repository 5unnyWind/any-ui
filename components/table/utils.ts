export const getKeyValue =
  <T extends {}, U extends keyof T>(key: U) =>
  (obj: T) =>
    obj[key];

export const ascSort = <T extends object>(target: string, list: T[]): T[] => {
  return list.sort((a, b): number => {
    // @ts-ignore
    const _a = getKeyValue<keyof T, T>(target)(a);
    // @ts-ignore
    const _b = getKeyValue<keyof T, T>(target)(b);
    if (_a < _b) return -1;
    if (_a > _b) return 1;
    return 0;
  });
};

export const descSort = <T extends object>(target: string, list: T[]): T[] => {
  return list.sort((a, b): number => {
    // @ts-ignore
    const _a = getKeyValue<keyof T, T>(target)(a);
    // @ts-ignore
    const _b = getKeyValue<keyof T, T>(target)(b);
    if (_a > _b) return -1;
    if (_a < _b) return 1;
    return 0;
  });
};

type TableElementType = string | number;

export const tableFilter = <T extends {}>(
  target: TableElementType,
  key: string,
  list: T[]
): T[] => {
  return list.filter((cur) => {
    // @ts-ignore
    const _cur = getKeyValue<keyof T, T>(key)(cur);
    if (_cur == target) {
      return cur;
    }
    return null;
  });
};
