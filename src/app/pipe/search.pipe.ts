import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchValue: any): any {
    console.log(value, searchValue);
    if (!searchValue) {
      return value;
    }
    else {
      return value.filter((value:any) => {
        return value.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      });
    }

  }

}
