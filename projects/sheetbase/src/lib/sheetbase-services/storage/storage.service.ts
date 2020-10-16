import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import {
  UploadFile,
  UploadResource,
  RenamePolicy,
  FileSharing,
  FileUpdateData,
} from '@sheetbase/client';

import { SheetbaseService } from '../sheetbase/sheetbase.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private Sheetbase: SheetbaseService) {}

  info(id: string, cacheTime = 1440) {
    return from(this.Sheetbase.storage().info(id, cacheTime));
  }

  upload(
    fileData: UploadFile,
    customFolder?: string,
    renamePolicy?: RenamePolicy,
    sharing: FileSharing = 'PRIVATE',
  ) {
    return from(this.Sheetbase.storage().upload(fileData, customFolder, renamePolicy, sharing));
  }

  uploadMultiple(uploadResources: UploadResource[]) {
    return from(this.Sheetbase.storage().uploadMultiple(uploadResources));
  }

  update(id: string, data: FileUpdateData) {
    return from(this.Sheetbase.storage().update(id, data));
  }

  remove(id: string) {
    return from(this.Sheetbase.storage().remove(id));
  }

  read(file: File) {
    return from(this.Sheetbase.storage().read(file));
  }

}
