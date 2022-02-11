import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css'],
})
export class LoggerComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {}
  log() {
    this.logger.log('Console log is called');
  }
  warn() {
    this.logger.warn('Console warn is called');
  }
  info() {
    this.logger.info('Console Info is called');
  }
  error() {
    this.logger.err('Console error is called');
  }
}
