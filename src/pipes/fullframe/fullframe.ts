import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullframeCamera',
})
export class FullframePipe implements PipeTransform {

  transform(value: any) {
    if(isNaN(value)) {
      return null
    }
    
    if(value !== null  && value > 0) {
      let lensMM: any = 600/value

      return `${parseFloat(lensMM).toFixed(2)} sec`
    }
    
    return null
  }
}
