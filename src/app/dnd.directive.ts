import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})

export class DndDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "brown"

  }


}
