import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { AppService } from '../../general-services/app/app.service';
import { ApiService } from '../../sheetbase-services/api/api.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private sheetName = 'orders';

  constructor(
    private appService: AppService,
    private apiService: ApiService,
    private databaseService: DatabaseService,
  ) {}

  items(filter?: Filter<Order>, options?: ItemsOptions) {
    return this.databaseService.items(this.sheetName, filter, options) as Observable<Order[]>;
  }

  item(finder: string | Filter<Order>, options?: ItemOptions) {
    return this.databaseService.item(this.sheetName, finder, options) as Observable<Order>;
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft(this.sheetName, options) as Observable<Order[]>;
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished(this.sheetName, options) as Observable<Order[]>;
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived(this.sheetName, options) as Observable<Order[]>;
  }

  itemsStageNew(options?: ItemsOptions) {
    return this.itemsByStage('new', options) as Observable<Order[]>;
  }

  itemsStageConfirmed(options?: ItemsOptions) {
    return this.itemsByStage('confirmed', options) as Observable<Order[]>;
  }

  itemsStageDelivering(options?: ItemsOptions) {
    return this.itemsByStage('delivering', options) as Observable<Order[]>;
  }

  itemsStageDone(options?: ItemsOptions) {
    return this.itemsByStage('done', options) as Observable<Order[]>;
  }

  itemsStageCancelled(options?: ItemsOptions) {
    return this.itemsByStage('cancelled', options) as Observable<Order[]>;
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType(this.sheetName, type, options) as Observable<Order[]>;
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault(this.sheetName, options) as Observable<Order[]>;
  }

  itemsByStage(
    stage: 'new' | 'confirmed' | 'delivering' | 'done' | 'cancelled',
    options?: ItemsOptions,
  ) {
    return this.databaseService.items(
      this.sheetName,
      (item: Order) => (
        !!item.stage &&
        item.stage === stage
      ),
      options,
    ) as Observable<Order[]>;
  }

  itemsByUid(uid: string, options?: ItemsOptions) {
    return this.databaseService.items(
      this.sheetName,
      (item: Order) => (
        !!item.uid &&
        item.uid === uid
      ),
      options,
    ) as Observable<Order[]>;
  }

  itemsByEmail(email: string, options?: ItemsOptions) {
    return this.databaseService.items(
      this.sheetName,
      (item: Order) => (
        !!item.email &&
        item.email === email
      ),
      options,
    ) as Observable<Order[]>;
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists(this.sheetName, metaKey, options) as Observable<Order[]>;
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals(this.sheetName, metaKey, equalTo, options) as Observable<Order[]>;
  }

  add(item: Order) {
    return this.databaseService.add(this.sheetName, null, item);
  }

  addExtra(item: Order, endpoint = '/app/order') {
    return this.apiService.put(endpoint, {}, {
      host: this.appService['host'],
      order: item,
    });
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheetName);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheetName, key);
  }

}
