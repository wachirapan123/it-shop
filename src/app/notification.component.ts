import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="notificationService.notification$ | async as n"
         class="notification-toast">
      {{ n.message }}
    </div>
  `,
  styles: [`
    .notification-toast {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2000;
      min-width: 300px;
      max-width: 90%;
      padding: 15px 25px;
      border-radius: 10px;
      font-weight: bold;
      font-size: 1rem;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      color: #000; /* ตัวหนังสือดำ */
      background-color: #e0e0e0; /* พื้นหลังสีเทา */
      animation: slide-down 0.5s ease-out;
    }

    @keyframes slide-down {
      from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
      to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}
}
