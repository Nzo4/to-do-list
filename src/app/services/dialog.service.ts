import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  open() {
    this.dialogState$.next(true);
  }

  close() {
    this.dialogState$.next(false);
  }


}
