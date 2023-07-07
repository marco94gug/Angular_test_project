import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  notifications: string[] = [];

  add(notice: string): void {
    this.notifications.push(notice);
  }

  clearAll(): void {
    this.notifications = [];
  }

  constructor() {}
}
