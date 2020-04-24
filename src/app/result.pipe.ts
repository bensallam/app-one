import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: any, limit?: number): any {
    if (!value) {
      return null;
    }
    return value.substr(0, limit) + '...';
  }

}
