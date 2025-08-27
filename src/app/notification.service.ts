import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type NotificationType = 'success' | 'error';

export interface Notification {
  message: string;
  type: NotificationType;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _notification = new BehaviorSubject<Notification | null>(null);
  notification$ = this._notification.asObservable();

  show(message: string, type: NotificationType = 'success', duration: number = 3000) {
    this._notification.next({ message, type });
    setTimeout(() => this._notification.next(null), duration);
  }
}
