import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if(!value && value !== 0) {
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'mm':
        return value * 1609340;
      case 'c':
        return (value - 32) * 5/9;
      default: 
        throw new Error('Target unit not supported');
    }
  }

}
