import { Injectable } from '@angular/core';
import { Thread } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { AppService } from '../../general-services/app/app.service';
import { ApiService } from '../../sheetbase-services/api/api.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  private sheet = 'threads';

  constructor(
    private App: AppService,
    private Api: ApiService,
    private databaseService: DatabaseService,
  ) {}

  all(cacheTime?: number) {
    return this.databaseService.all<Thread>(this.sheet, cacheTime);
  }

  items(filter?: Filter, options?: ItemsOptions) {
    return this.databaseService.items<Thread>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.databaseService.item<Thread>(this.sheet, finder, options);
  }

  itemsOriginal(options?: ItemsOptions) {
    return this.databaseService.itemsOriginal<Thread>(this.sheet, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft<Thread>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished<Thread>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived<Thread>(this.sheet, options);
  }

  itemsTopLevel(options?: ItemsOptions) {
    return this.items(
      (item: Thread) => !item.parent,
      options,
    );
  }

  itemsStandalone(options?: ItemsOptions) {
    return this.items(
      (item: Thread) => !item.master,
      options,
    );
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType<Thread>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault<Thread>(this.sheet, options);
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
    );
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
    );
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
    );
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
    );
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists<Thread>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals<Thread>(this.sheet, metaKey, equalTo, options);
  }

  viewing(key: string) {
    return this.databaseService.viewing(this.sheet, key);
  }

  liking(key: string) {
    return this.databaseService.liking(this.sheet, key);
  }

  commenting(key: string) {
    return this.databaseService.commenting(this.sheet, key);
  }

  rating(key: string, stars: number) {
    return this.databaseService.rating(this.sheet, key, stars);
  }

  sharing(key: string, providers: string[] = []) {
    return this.databaseService.sharing(this.sheet, key, providers);
  }

  add(item: Thread) {
    return this.databaseService.add(this.sheet, null, item);
  }

  addExtra(item: Thread, endpoint = '/app/thread') {
    return this.Api.put(endpoint, {}, {
      host: this.App['host'],
      thread: item,
    });
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheet, key);
  }

}
