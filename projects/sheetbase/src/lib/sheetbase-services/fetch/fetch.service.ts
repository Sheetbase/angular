import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private sheetbaseService: SheetbaseService) {}

  fetch<Data>(input: RequestInfo, init?: RequestInit, json?: boolean) {
    return from(this.sheetbaseService.fetch().fetch<Data>(input, init, json));
  }

  get<Data>(url: string, init?: RequestInit, json?: boolean, cacheTime?: number) {
    return from(this.sheetbaseService.fetch().get<Data>(url, init, json, cacheTime));
  }

  post<Data>(url: string, init?: RequestInit) {
    return from(this.sheetbaseService.fetch().post<Data>(url, init));
  }

  put<Data>(url: string, init?: RequestInit) {
    return from(this.sheetbaseService.fetch().put<Data>(url, init));
  }

  patch<Data>(url: string, init?: RequestInit) {
    return from(this.sheetbaseService.fetch().patch<Data>(url, init));
  }

  delete<Data>(url: string, init?: RequestInit) {
    return from(this.sheetbaseService.fetch().delete<Data>(url, init));
  }

}
