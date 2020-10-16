import { Injectable } from '@angular/core';
import { Order } from '@sheetbase/models';
import { Filter, ItemsOptions, ItemOptions } from '@sheetbase/client';

import { AppService } from '../../general-services/app/app.service';
import { ApiService } from '../../sheetbase-services/api/api.service';
import { DatabaseService } from '../../sheetbase-services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private sheet = 'orders';

  constructor(
    private App: AppService,
    private Api: ApiService,
    private databaseService: DatabaseService,
  ) {}

  items(filter?: Filter, options?: ItemsOptions) {
    return this.databaseService.items<Order>(this.sheet, filter, options);
  }

  item(finder: string | Filter, options?: ItemOptions) {
    return this.databaseService.item<Order>(this.sheet, finder, options);
  }

  itemsDraft(options?: ItemsOptions) {
    return this.databaseService.itemsDraft<Order>(this.sheet, options);
  }

  itemsPublished(options?: ItemsOptions) {
    return this.databaseService.itemsPublished<Order>(this.sheet, options);
  }

  itemsArchived(options?: ItemsOptions) {
    return this.databaseService.itemsArchived<Order>(this.sheet, options);
  }

  itemsStageNew(options?: ItemsOptions) {
    return this.itemsByStage('new', options);
  }

  itemsStageConfirmed(options?: ItemsOptions) {
    return this.itemsByStage('confirmed', options);
  }

  itemsStageDelivering(options?: ItemsOptions) {
    return this.itemsByStage('delivering', options);
  }

  itemsStageDone(options?: ItemsOptions) {
    return this.itemsByStage('done', options);
  }

  itemsStageCancelled(options?: ItemsOptions) {
    return this.itemsByStage('cancelled', options);
  }

  itemsByType(type: string, options?: ItemsOptions) {
    return this.databaseService.itemsByType<Order>(this.sheet, type, options);
  }

  itemsByTypeDefault(options?: ItemsOptions) {
    return this.databaseService.itemsByTypeDefault<Order>(this.sheet, options);
  }

  itemsByStage(
    stage: 'new' | 'confirmed' | 'delivering' | 'done' | 'cancelled',
    options?: ItemsOptions,
  ) {
    return this.databaseService.items<Order>(
      this.sheet,
      (item: Order) => (
        !!item.stage &&
        item.stage === stage
      ),
      options,
    );
  }

  itemsByUid(uid: string, options?: ItemsOptions) {
    return this.databaseService.items<Order>(
      this.sheet,
      (item: Order) => (
        !!item.uid &&
        item.uid === uid
      ),
      options,
    );
  }

  itemsByEmail(email: string, options?: ItemsOptions) {
    return this.databaseService.items<Order>(
      this.sheet,
      (item: Order) => (
        !!item.email &&
        item.email === email
      ),
      options,
    );
  }

  itemsByMetaExists(metaKey: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaExists<Order>(this.sheet, metaKey, options);
  }

  itemsByMetaEquals(metaKey: string, equalTo: string, options?: ItemsOptions) {
    return this.databaseService.itemsByMetaEquals<Order>(this.sheet, metaKey, equalTo, options);
  }

  add(item: Order) {
    return this.databaseService.add(this.sheet, null, item);
  }

  addExtra(item: Order, endpoint = '/app/order') {
    return this.Api.put(endpoint, {}, {
      host: this.App['host'],
      order: item,
    });
  }

  clearCachedAll() {
    return this.databaseService.clearCachedAll(this.sheet);
  }

  clearCachedItem(key: string) {
    return this.databaseService.clearCachedItem(this.sheet, key);
  }

}
