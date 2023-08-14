export type TPaginationProps = {
  currentPage: number;
  next: () => void | Promise<void>;
  previous: () => void | Promise<void>;
};
