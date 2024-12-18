import {Component, Input} from '@angular/core';
import {Order} from '../../../interface/order';
import {NgForOf, NgIf} from '@angular/common';
import {OrderMenuItemComponent} from '../order-menu-item/order-menu-item.component';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [
    NgIf,
    OrderMenuItemComponent,
    NgForOf
  ],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent {
  @Input() order!: Order;
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
