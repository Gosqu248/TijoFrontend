import {Component, Input, OnInit} from '@angular/core';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {MenuBasketItemComponent} from '../menu-basket-item/menu-basket-item.component';
import {OrderMenu} from '../../../interface/order-menu';
import {CartService} from '../../../services/cart.service';
import {RestaurantService} from '../../../services/restaurant.service';
import {Restaurant} from '../../../interface/restaurant';
import {Order} from '../../../interface/order';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-menu-basket',
  standalone: true,
  imports: [
    NgIf,
    MenuBasketItemComponent,
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './menu-basket.component.html',
  styleUrl: './menu-basket.component.css'
})
export class MenuBasketComponent implements OnInit{
  @Input() restaurantId!: number;

  orderMenus: OrderMenu[] = [];
  restaurant: Restaurant = {} as Restaurant;

  ordersPrice: number = 0;
  deliveryPrice: number = 7;
  totalPrice: number = 0;
  serviceFee: number = 2;

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.getRestaurant();
    this.getCart();
  }

  getRestaurant() {
    if (this.restaurantId) {
      this.restaurantService.getRestaurantById(this.restaurantId).subscribe((data: Restaurant) => {
        this.restaurant = data;
        this.cartService.setCurrentRestaurantId(data.id);
      });

    }
  }
  getCart() {
    this.cartService.orderMenus$.subscribe(cart => {
      this.orderMenus = cart;
      this.ordersPrice = this.cartService.calculateOrdersPrice(this.orderMenus);
      this.totalPrice = this.ordersPrice + this.deliveryPrice + this.serviceFee;
    });
  }

  createOrder() {
    const order: Order = {
      totalPrice: this.totalPrice,
      restaurant: this.restaurant,
      orderMenus: this.orderMenus,
    }

    this.orderService.createOrder(order)
  }

}
