import { Injectable } from '@angular/core';
import {OrderMenu} from '../interface/order-menu';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private currentRestaurantId: number | null = null;

  orderMenus = new BehaviorSubject<OrderMenu[]>(this.loadCartFromLocalStorage());
  orderMenus$ = this.orderMenus.asObservable();

  calculateOrdersPrice(orderMenus: OrderMenu[]): number {
    return orderMenus.reduce((total, orderMenu) => {
      return total + (orderMenu.menu.price * orderMenu.quantity);
    }, 0);
  }

  setCurrentRestaurantId(restaurantId: number) {
    this.currentRestaurantId = restaurantId;
    this.orderMenus.next(this.loadCartFromLocalStorage());
  }

  addToCart(orderMenu: OrderMenu, quantity: number = 1) {
    const currentCart = this.orderMenus.value;

    const existingItem = currentCart.find(i =>
      i.menu.id === orderMenu.menu.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      orderMenu.quantity = quantity;
      currentCart.push(orderMenu);
    }

    this.orderMenus.next(currentCart);
    this.saveCartToLocalStorage(currentCart);
  }

  removeFromCart(item: OrderMenu) {
    const currentCart = this.orderMenus.value;
    const existingItem = currentCart.find(i =>
      i.menu.id === item.menu.id
    );

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        currentCart.splice(currentCart.indexOf(existingItem), 1);
      }
    }
    this.orderMenus.next(currentCart);
    this.saveCartToLocalStorage(currentCart);
  }

  removeProductFromCart(orderMenu: OrderMenu) {
    const currentCart = this.orderMenus.value;
    const existingItem = currentCart.find(i =>
      i.menu.id === orderMenu.menu.id
    );

    if (existingItem) {
      currentCart.splice(currentCart.indexOf(existingItem), 1);
    }
    this.orderMenus.next(currentCart);
    this.saveCartToLocalStorage(currentCart);
  }

  private saveCartToLocalStorage(orderMenu: OrderMenu[]) {
    if (this.currentRestaurantId !== null && typeof localStorage !== 'undefined') {
      localStorage.setItem(`orderMenu_${this.currentRestaurantId}`, JSON.stringify(orderMenu));
    }
  }

  private loadCartFromLocalStorage(): OrderMenu[] {
    if (this.currentRestaurantId !== null && typeof localStorage !== 'undefined') {
      const cart = localStorage.getItem(`orderMenu_${this.currentRestaurantId}`);
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  }

  deleteCartFromLocalStorage() {
    if (this.currentRestaurantId !== null && typeof localStorage !== 'undefined') {
      localStorage.removeItem(`orderMenu_${this.currentRestaurantId}`);
    }

  }


}
