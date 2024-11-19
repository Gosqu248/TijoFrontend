import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Order} from '../interface/order';
import {CartService} from './cart.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = environment.api + '/api/order';
  constructor(private http: HttpClient, private cartService: CartService) { }

  createOrder(order: Order) {
    order.totalPrice = parseFloat(order.totalPrice.toFixed(2));
    return this.http.post<Order>(`${this.apiUrl}/createOrder`, order).subscribe({
      next: () => {
        this.cartService.deleteCartFromLocalStorage();
      },
      error: (error) => {
        console.error('Error creating order:', error);
      }
    });
  }
}
