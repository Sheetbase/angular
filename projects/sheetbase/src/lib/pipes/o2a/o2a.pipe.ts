import { Pipe, PipeTransform } from '@angular/core';

import { UtilsService } from '../../app-services/utils/utils.service';

@Pipe({
  name: 'o2a'
})
export class O2aPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {}

  transform(value: {[$key: string]: any}, ... args: any[]) {
    return this.utilsService.o2a(value, ...args);
  }

}
