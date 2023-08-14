import { DateTime } from '../class/date-time/date-time.class';

export type TNumberRange = {
  min?: number;
  max?: number;
};

export type TDateRange = {
  start: DateTime;
  end: DateTime;
};
