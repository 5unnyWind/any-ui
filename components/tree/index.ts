export interface ListItem {
  label: string;
  avatar?: string;
  children?: ListItem[];
  check?: boolean;
}

interface BaseTreeProps {
  list: ListItem[];
  checkbox?: boolean;
  parentBox: string;
  handleParent?: (e: any, status: boolean) => void;
  parentStatus?: boolean;
}

type NativeDivProps = BaseTreeProps & React.HTMLAttributes<HTMLElement>;

export type TreeProps = Partial<NativeDivProps>;

const changeParent = (e: React.MouseEvent<HTMLElement>) => {
  (e.currentTarget.parentNode?.nextSibling as HTMLElement).style.display =
    (e.currentTarget.parentNode?.nextSibling as HTMLElement).style.display ===
    "block"
      ? "none"
      : "block";
};

export const handlerClick = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.className =
    e.currentTarget.className === "ai-tree-arrow"
      ? "ai-tree-arrow ai-tree-arrow-rotate"
      : "ai-tree-arrow";
  changeParent(e);
};
