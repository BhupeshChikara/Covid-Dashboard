import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return (value/1000).toFixed(2) +'k';
  }

}
