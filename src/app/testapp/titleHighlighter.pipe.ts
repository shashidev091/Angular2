import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name : 'upperTitle'
})
export class TitleHighlighterPipe implements PipeTransform {
  transform(value: string, ...args): any {
    if (!value) {
      return null;
    }

    const arr = value.split(' ');
    console.log(arr);
    const newarr = arr.map(char => {
      if (char.length >= 3 || char[0] === 'the' ) {
        const a = char[0].toUpperCase();
        char.replace(char[0], a);
      }

      return char;
    });

    return newarr.join(' ');
  }
}
