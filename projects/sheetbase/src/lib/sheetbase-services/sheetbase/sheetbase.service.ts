import { Injectable } from '@angular/core';
import { App } from '@sheetbase/client';

@Injectable({
  providedIn: 'root'
})
export class SheetbaseService {

  private app: App;

  constructor() {}

  setApp(app: App): SheetbaseService {
    this.app = app;
    return this;
  }

  getApp() {
    return this.app;
  }

  helper() {
    return this.app.helperService;
  }

  option() {
    return this.app.optionService;
  }

  localstorage() {
    return this.app.localstorageService;
  }

  cache() {
    return this.app.cacheService;
  }

  fetch() {
    return this.app.fetchService;
  }

  api() {
    return this.app.apiService;
  }

  database() {
    return this.app.databaseService;
  }

  storage() {
    return this.app.storageService;
  }

  mail() {
    return this.app.mailService;
  }

  auth() {
    return this.app.authService;
  }

}
