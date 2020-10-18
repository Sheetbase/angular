import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Thread } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { AppService } from '../../general-services/app/app.service';
import { ApiService } from '../../sheetbase-services/api/api.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  private sheetName = 'threads';

  constructor(
    private appService: AppService,
    private apiService: ApiService,
    private databaseService: DatabaseService,
  ) {}

  all(cacheTime?: number) {
    return this.databaseService.all(this.sheetName, cacheTime) as Observable<Thread[]>;
  }

  items(filter?: Filter<Thread>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Thread[]>;
  }

  item(finder: string | Filter<Thread>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Thread>;
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal(this.sheetName, options) as Observable<Thread[]>;
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft(this.sheetName, options) as Observable<Thread[]>;
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished(this.sheetName, options) as Observable<Thread[]>;
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived(this.sheetName, options) as Observable<Thread[]>;
  }

  itemsTopLevel(options?: ItemsOptions) {
    return this.items(
      (item: Thread) => !item.parent,
      options,
    ) as Observable<Thread[]>;
  }

  itemsStandalone(options?: ItemsOptions) {
    return this.items(
      (item: Thread) => !item.master,
      options,
    ) as Observable<Thread[]>;
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType(this.sheetName, type, options) as Observable<Thread[]>;
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault(this.sheetName, options) as Observable<Thread[]>;
  }

  itemsByMaster(
    contentType: string,
    masterKey: string,
    options?: ItemsOptions,
  ) {
    return this.items(
      (item: Thread) => (
        !!item.master &&
        item.master === `${contentType}:${masterKey}`
      ),
      options,
    ) as Observable<Thread[]>;
  }

  itemsByThread(
    threadKey: string,
    options?: ItemsOptions,
  ) {
    return this.items(
      (item: Thread) => (
        !!item.parent &&
        item.parent === threadKey
      ),
      options,
    ) as Observable<Thread[]>;
  }

  itemsByUid(
    uid: string,
    options?: ItemsOptions,
  ) {
    return this.items(
      (item: Thread) => (
        !!item.uid &&
        item.uid === uid
      ),
      options,
    ) as Observable<Thread[]>;
  }

  itemsByEmail(
    email: string,
    options?: ItemsOptions,
  ) {
    return this.items(
      (item: Thread) => (
        !!item.email &&
        item.email === email
      ),
      options,
    ) as Observable<Thread[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Thread[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Thread[]>;
  }

  viewing(key: string) {
    return this.databaseService.viewing(this.sheetName, key);
  }

  liking(key: string) {
    return this.databaseService.liking(this.sheetName, key);
  }

  commenting(key: string) {
    return this.databaseService.commenting(this.sheetName, key);
  }

  rating(key: string, stars: number) {
    return this.databaseService.rating(this.sheetName, key, stars);
  }

  sharing(key: string, providers: string[] = []) {
    return this.databaseService.sharing(this.sheetName, key, providers);
  }

  add(item: Thread) {
    return this.databaseService.add(this.sheetName, null, item);
  }

  addExtra(item: Thread, endpoint = '/app/thread') {
    return this.apiService.put(endpoint, {}, {
      host: this.appService['host'],
      thread: item,
    });
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
