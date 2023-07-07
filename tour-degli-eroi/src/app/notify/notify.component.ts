import { Component } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-notify',
  template: `
    <h2>Notifications:</h2>
    <button class="clear">Clear Notifications</button>
    <div *ngFor="let notification of notifyTest.notifications"></div>
  `,
  styles: [],
})
export class NotifyComponent {
  notifyTest?: any;

  constructor(private notify: NotifyService) {
    this.notifyTest = notify;
  }
}
