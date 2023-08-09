export abstract class AbstractHandler<DEPENDENCIES extends object | void = void> {
  constructor(protected readonly _dependencies: DEPENDENCIES) {}
}
