import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(msg: string) {
    console.log(new Date() + msg);
  }
  info(msg: string) {
    console.info(new Date() + msg);
  }
  warn(msg: string) {
    console.warn(new Date() + msg);
  }
  err(msg: string) {
    console.error(new Date() + msg);
  }
}
