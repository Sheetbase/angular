import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { UserProfile } from '@sheetbase/models';

import { ApiService } from '../../sheetbase-services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) {}

  profiles(uids: string[], cacheTime?: number): Observable<{[uid: string]: UserProfile}> {
    return from(this.apiService.get('/auth/public', { uids: uids.join(',') }, cacheTime));
  }

  profile(uid: string, cacheTime?: number): Observable<UserProfile> {
    return from(this.apiService.get('/auth/public', { uid }, cacheTime));
  }

}
