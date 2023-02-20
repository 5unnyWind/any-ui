export type DateSourceType = any | object;

export interface useFilterProps {
  dataSource: DateSourceType;
  target: string;
}

export const useFilter = ({ dataSource, target }: useFilterProps) => {
  const ascData = () => {
    return dataSource.sort(
      (a: DateSourceType, b: DateSourceType) => a[`${target}`] - b[`${target}`]
    );
  };

  const descData = () => {
    return dataSource.sort(
      (a: DateSourceType, b: DateSourceType) => b[`${target}`] - a[`${target}`]
    );
  };

  return {
    ascData,
    descData,
  };
};
