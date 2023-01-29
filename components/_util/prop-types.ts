export const tuple = <T extends string[]>(...args: T) => args;

const normalTypes = tuple(
  "default",
  "secondary",
  "success",
  "warning",
  "error"
);

export type NormalTypes = (typeof normalTypes)[number];
