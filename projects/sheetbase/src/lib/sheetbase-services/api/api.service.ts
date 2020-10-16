import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { ApiInstanceData, BeforeRequestHook } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private sheetbaseService: SheetbaseService) {}

  extend() {
    return this.sheetbaseService.api().extend();
  }

  setData(data: ApiInstanceData) {
    return this.sheetbaseService.api().setData(data);
  }

  setEndpoint(endpoint: string) {
    return this.sheetbaseService.api().setEndpoint(endpoint);
  }

  addQuery(query: {}) {
    return this.sheetbaseService.api().addQuery(query);
  }

  addBody(body: {}) {
    return this.sheetbaseService.api().addBody(body);
  }

  addBeforeHooks(hooks: BeforeRequestHook | BeforeRequestHook[]) {
    return this.sheetbaseService.api().addBeforeHooks(hooks);
  }

  request(inputs: {
    method?: string,
    endpoint?: string,
    query?: {},
    body?: {},
    cacheTime?: number;
  } = {}) {
    return from(this.sheetbaseService.api().request(inputs));
  }

  get(endpoint?: string, query = {}, cacheTime = 0) {
    return from(this.sheetbaseService.api().get(endpoint, query, cacheTime));
  }

  post(endpoint?: string, query = {}, body = {}) {
    return from(this.sheetbaseService.api().post(endpoint, query, body));
  }

  put(endpoint?: string, query = {}, body = {}) {
    return from(this.sheetbaseService.api().put(endpoint, query, body));
  }

  patch(endpoint?: string, query = {}, body = {}) {
    return from(this.sheetbaseService.api().patch(endpoint, query, body));
  }

  delete(endpoint?: string, query = {}, body = {}) {
    return from(this.sheetbaseService.api().delete(endpoint, query, body));
  }

}
