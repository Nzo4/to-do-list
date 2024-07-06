import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAccordionItems]'
})
export class AccordionItemsDirective implements OnChanges {
  @Input() isOpen!: boolean;
  @Output() getOptionName = new EventEmitter<string>();

  @HostBinding('style.display') display = 'none'
  constructor(private elementRef: ElementRef) { }

  ngOnChanges(): void {
    if (this.isOpen) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }

  @HostListener('click', ['$event'])
  pickOption() {
    const target = event?.target as HTMLElement;
    if (target.textContent) {
      this.getOptionName.emit(target.textContent)
    }

  }



}