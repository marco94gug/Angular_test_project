import { Component } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-notify',
  template: `
    <div *ngIf="notify.notifications.length > 0">
      <h2>Notifications:</h2>
      <button class="clear" (click)="notify.clearAll()">
        Clear Notifications
      </button>
      <div *ngFor="let notification of notify.notifications">
        {{ notification }}
      </div>
    </div>
  `,
  styles: [
    `
      h2 {
        color: #b22222;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
      }

      body {
        margin: 2em;

        input[text],
        button {
          color: crimson;
          font-family: Cambria, Georgia;
        }
      }

      button {
        &.clear {
          font-family: Arial;
          background-color: #eee;
          border: none;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: hand;
          color: #333;
          margin-bottom: 12px;
        }

        &:hover {
          background-color: #cfd8dc;
        }

        &:disabled {
          background-color: #eee;
          color: #aaa;
          cursor: auto;
        }
      }
    `,
  ],
})
export class NotifyComponent {
  constructor(public notify: NotifyService) {}
}
