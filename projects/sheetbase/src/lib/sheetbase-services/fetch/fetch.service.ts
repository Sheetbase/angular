import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private Sheetbase: SheetbaseService) {}

  fetch<Data>(input: RequestInfo, init?: RequestInit, json?: boolean) {
    return from(this.Sheetbase.fetch().fetch<Data>(input, init, json));
  }

  get<Data>(url: string, init?: RequestInit, json?: boolean, cacheTime?: number) {
    return from(this.Sheetbase.fetch().get<Data>(url, init, json, cacheTime));
  }

  post<Data>(url: string, init?: RequestInit) {
    return from(this.Sheetbase.fetch().post<Data>(url, init));
  }

  put<Data>(url: string, init?: RequestInit) {
    return from(this.Sheetbase.fetch().put<Data>(url, init));
  }

  patch<Data>(url: string, init?: RequestInit) {
    return from(this.Sheetbase.fetch().patch<Data>(url, init));
  }

  delete<Data>(url: string, init?: RequestInit) {
    return from(this.Sheetbase.fetch().delete<Data>(url, init));
  }

}
