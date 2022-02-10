import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustDirective]',
})
export class CustDirectiveDirective {
  constructor(private e1: ElementRef) {}
  @HostListener('mouseover') change() {
    console.log('lololo');
    this.e1.nativeElement.style.transform =
      'skewY(2deg) skewX(15deg) scale(1.1)';
    this.e1.nativeElement.style.textShadow =
      '0.5rem 1rem 2rem rgb(0 0 0 / 20%)';
  }
  @HostListener('mouseout') changeItAgain() {
    console.log('lololo');
    this.e1.nativeElement.style.transform = '';
    this.e1.nativeElement.style.textShadow = '';
  }
}
