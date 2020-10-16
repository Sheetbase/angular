import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { Api, ApiInstanceData, BeforeRequestHook } from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Sheetbase: SheetbaseService) {}

  extend(): Api {
    return this.Sheetbase.api().extend();
  }

  setData(data: ApiInstanceData): Api {
    return this.Sheetbase.api().setData(data);
  }

  setEndpoint(endpoint: string): Api {
    return this.Sheetbase.api().setEndpoint(endpoint);
  }

  addQuery(query: {}): Api {
    return this.Sheetbase.api().addQuery(query);
  }

  addBody(body: {}): Api {
    return this.Sheetbase.api().addBody(body);
  }

  addBeforeHooks(hooks: BeforeRequestHook | BeforeRequestHook[]): Api {
    return this.Sheetbase.api().addBeforeHooks(hooks);
  }

  request(inputs: {
    method?: string,
    endpoint?: string,
    query?: {},
    body?: {},
    cacheTime?: number;
  } = {}) {
    return from(this.Sheetbase.api().request(inputs));
  }

  get(endpoint?: string, query = {}, cacheTime = 0) {
    return from(this.Sheetbase.api().get(endpoint, query, cacheTime));
  }

  post(endpoint?: string, query = {}, body = {}) {
    return from(this.Sheetbase.api().post(endpoint, query, body));
  }

  put(endpoint?: string, query = {}, body = {}) {
    return from(this.Sheetbase.api().put(endpoint, query, body));
  }

  patch(endpoint?: string, query = {}, body = {}) {
    return from(this.Sheetbase.api().patch(endpoint, query, body));
  }

  delete(endpoint?: string, query = {}, body = {}) {
    return from(this.Sheetbase.api().delete(endpoint, query, body));
  }

}
