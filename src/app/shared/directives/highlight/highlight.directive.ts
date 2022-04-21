import { Directive, ElementRef } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
    ) {
      element.nativeElement.style.backgroundcolor = 'red';
    }


}
