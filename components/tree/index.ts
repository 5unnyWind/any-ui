type ListItem = {
  label: string;
  avatar?: string;
  children?: ListItem[];
};

interface BaseTreeProps {
  list: ListItem[];
}

type NativeDivProps = BaseTreeProps & React.HTMLAttributes<HTMLElement>;

export type TreeProps = Partial<NativeDivProps>;
