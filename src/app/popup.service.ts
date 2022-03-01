import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}
  popup = new BehaviorSubject<string>('');

  checkString(): Observable<string> {
    return this.popup.asObservable();
  }
  setMessage(msg: string) {
    this.popup.next(msg);
  }
}
