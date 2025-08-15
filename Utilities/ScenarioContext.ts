export class ScenarioContext {
  private store: Map<string, any>;

  constructor() {
    this.store = new Map();
  }

  set(key: string, value: any) {
    this.store.set(key, value);
  }

  get<T>(key: string): T | undefined {
    return this.store.get(key);
  }

  has(key: string): boolean {
    return this.store.has(key);
  }

  clear() {
    this.store.clear();
  }
}
