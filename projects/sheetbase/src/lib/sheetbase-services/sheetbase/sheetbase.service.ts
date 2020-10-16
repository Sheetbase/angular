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

  localstorage() {
    return this.app.Localstorage;
  }

  cache() {
    return this.app.Cache;
  }

  fetch() {
    return this.app.Fetch;
  }

  api() {
    return this.app.Api;
  }

  database() {
    return this.app.Database;
  }

  auth() {
    return this.app.Auth;
  }

  storage() {
    return this.app.Storage;
  }

  mail() {
    return this.app.Mail;
  }

}
