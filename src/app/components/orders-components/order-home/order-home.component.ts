import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {environment} from '../../../../environments/environment';
import {Order} from '../../../interface/order';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {OrderItemComponent} from '../order-item/order-item.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-order-home',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    OrderItemComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './order-home.component.html',
  styleUrl: './order-home.component.css'
})
export class OrderHomeComponent implements OnInit{
  background = environment.api + '/img/ordersBackground.webp';
  orders: Order[] = [];
  isLoading: boolean = true;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrders();
  }



  getOrders() {
      this.orderService.getAllOrders().subscribe({
        next: (orders) => {
          this.orders = orders;
          console.log('Orders:', this.orders);
          this.isLoading = !this.isLoading;
        },
        error: (error) => {
          console.error('Error getting user orders:', error);
        }
      });
    }



}
