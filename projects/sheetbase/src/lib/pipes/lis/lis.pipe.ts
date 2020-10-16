import { Pipe, PipeTransform } from '@angular/core';

import { UtilsService } from '../../app-services/utils/utils.service';

@Pipe({
  name: 'lis'
})
export class LisPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {}

  transform(value: any, ... args: any[]): any {
    const [ autoKey = false, separator = ',' ] = args;
    // build items
    const items = [];
    if (typeof value === 'string') {
      for (const val of value.split(separator).map(x => x.trim())) {
        const item = { title: val };
        if (!!autoKey) {
          item['$key'] = this.utilsService.cleanupStr(val)
          .toLowerCase()
          .replace(/\ /g, '-');
        }
        items.push(item);
      }
    } else {
      for (const key of Object.keys(value)) {
        let item = value[key];
        // turn string to obj
        if (typeof item === 'string') {
          item = { title: item };
        }
        item['$key'] = key; // add $key
        items.push(item);
      }
    }
    return items;
  }

}
