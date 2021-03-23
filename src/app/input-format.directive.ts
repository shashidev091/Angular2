import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @HostListener('focus')
  onFocus(): any {
    console.log('========= focus =======');
  }
  @Input('format')
  format;
  @Input('appInputFormat')
  formatWithAttribute;
  constructor(private el: ElementRef) { }
  @HostListener('blur')
  onBlur(): any {
    const value: string = this.el.nativeElement.value;
    console.log('========= blurr =======');
    if (this.format === 'lowerCase' || this.formatWithAttribute === 'lowerCase') {
      this.el.nativeElement.value = value.toLocaleLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
