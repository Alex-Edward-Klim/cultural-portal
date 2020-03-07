import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColored]'
})
export class ColoredDirective implements OnChanges{
  
  @Input() item;

  constructor(private elem: ElementRef, private renderer2: Renderer2) {
  }

  ngOnChanges(): void {
    if (!(this.item % 2)) { 
      this.elem.nativeElement.classList.add('colored');
    }
  }
}
