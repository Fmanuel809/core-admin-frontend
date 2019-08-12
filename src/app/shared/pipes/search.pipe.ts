import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) { return value; }
    const result = [];
    for (const v of value) {
        if (v.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            result.push(v);
        }
    }
    return result;
  }
}
