export type TTableProps = TTableHeaderProps & {
  data: TRowDataProps[][];
};

export type TTableHeaderProps = {
  selectable?: boolean;
  headers: TTableHeader[];
};

export type TTableRowProps = {
  selectable?: boolean;
};

export type TRowDataProps = {
  value: string | number | boolean;
  bagde?: string | number | boolean;
};

export type TTableHeader = { key: string; value: string };
