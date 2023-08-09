export abstract class Bootstrap {
  private static _adapters: any[] = [];
  static add(adapter: any) {
    this._adapters.push(adapter);
  }

  static init() {
    this._adapters.forEach((adapter) => adapter.instance());
  }
}
