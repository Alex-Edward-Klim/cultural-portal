import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColored]'
})
export class ColoredDirective implements OnChanges{
  
  @Input() item;

  constructor(private elem: ElementRef) { }

  ngOnChanges(): void {
    if (!(this.item % 2)) { 
      this.elem.nativeElement.classList.add('colored');
    }
  }
}
