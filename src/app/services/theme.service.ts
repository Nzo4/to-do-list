import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService<T = any> {

  public get applied$(): Observable<T | null> {
    return this._applied$.asObservable();
  }

  public get applied(): T | null {
    return this._applied$.getValue();
  }

  private themeLinkElement!: HTMLLinkElement;
  private _applied$ = new BehaviorSubject<T | null>(null);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.initThemeLinkElement();
  }

  public apply(themeName: T): void {
    this.themeLinkElement.href = `${themeName}.css`;

    this.document.body.classList.remove(this.applied as any);
    this.document.body.classList.add(themeName as any);
    this._applied$.next(themeName);
  }

  initThemeLinkElement() {
    const headElement = this.document.getElementsByTagName('head')[0];
    this.themeLinkElement = this.document.createElement('link');
    this.themeLinkElement.rel = 'stylesheet';

    headElement.appendChild(this.themeLinkElement);
  }
}
