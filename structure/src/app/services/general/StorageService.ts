import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  constructor() {}
  Set(key: string, obj: any) {
    if (obj != null) {
      const jsonObj = JSON.stringify(obj);
      localStorage.setItem(key, jsonObj);
    }
  }
  Get(key: string): any {
    const jsonObj = localStorage.getItem(key);
    return JSON.parse(jsonObj);
  }
  Clear() {
    localStorage.clear();
  }
  RemoveItem(key: string) {
    localStorage.removeItem(key);
  }
}
