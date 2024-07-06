import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[appAccordion]'
})
export class AccordionDirective implements OnInit {
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  documentSubscription!: Subscription;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.documentSubscription = fromEvent(document, 'click').subscribe((event: Event) => {
      this.isDocumentClick(event);
    })
  }

  isDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target === this.elementRef.nativeElement) {
    } else {
      this.isOpenChange.next(false);
    }
  }

  @HostListener('click', ['$event'])
  toggleAccordion() {
    this.isOpenChange.next(true);
  }


}
