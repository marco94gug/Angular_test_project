import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  notifications: string[] = [];

  add(notice: string): void {
    this.notifications.push(notice);
  }

  cancelAll(): void {
    this.notifications = [];
  }

  constructor() {}
}
