import { Pipe, PipeTransform } from '@angular/core';

import { UtilsService } from '../../app-services/utils/utils.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {}

  transform(items: any[], keyword: string, fields = ['keywords']) {
    return this.utilsService.filter(items, keyword, fields);
  }

}
