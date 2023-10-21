import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConversion'
})
export class TempConversionPipe implements PipeTransform {

  transform(value: number, unit: any) {
    //eg  title :
    if(unit=='C') {
      var temp = (value - 32) / 18;
      return temp;
    } else if(unit=='F') {
      var temp = (value *1.8) + 32;
      return temp;
    }
    return;
  }

}
