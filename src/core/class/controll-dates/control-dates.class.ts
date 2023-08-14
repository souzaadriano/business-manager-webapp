import { DateTime } from '../date-time/date-time.class';

export class ControllDates {
  readonly updatedAt: DateTime;
  readonly createdAt: DateTime;
  readonly deletedAt: DateTime | null;

  constructor(input: TConstrollDatesConstructor) {
    this.createdAt = input.createdAt;
    this.deletedAt = input.deletedAt;
    this.updatedAt = input.updatedAt;
  }

  static factory(input: TControllDatesFactoryInput) {
    const { createdAt, updatedAt, deletedAt } = input;

    return new ControllDates({
      updatedAt: DateTime.factory(updatedAt),
      createdAt: DateTime.factory(createdAt),
      deletedAt: deletedAt !== null ? DateTime.factory(deletedAt) : deletedAt,
    });
  }
}

type TConstrollDatesConstructor = {
  updatedAt: DateTime;
  createdAt: DateTime;
  deletedAt: DateTime | null;
};

export type TControllDatesFactoryInput = {
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
};
