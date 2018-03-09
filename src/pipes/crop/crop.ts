import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropCamera',
})
export class CropPipe implements PipeTransform {

  transform(value: any) {
    if(isNaN(value)) {
      return null
    }
    
    if(value !== null  && value > 0) {
      let lensMM: any = 400/value

      return `${parseFloat(lensMM).toFixed(2)} sec`
    }
    
    return null
  }
}
