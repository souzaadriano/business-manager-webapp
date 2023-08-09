export abstract class AbstractRepository<DEPENDENCIES extends object | void = void> {
  constructor(protected readonly _dependencies: DEPENDENCIES) {}
}
