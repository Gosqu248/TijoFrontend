import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderMenu} from '../../../interface/order-menu';
import {CartService} from '../../../services/cart.service';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-menu-basket-item',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './menu-basket-item.component.html',
  styleUrl: './menu-basket-item.component.css'
})
export class MenuBasketItemComponent implements OnInit{
  @Input() orderMenu!: OrderMenu;
  orderPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.setOrderPrice();
  }



  addOne() {
    this.cartService.addToCart(this.orderMenu);
    this.setOrderPrice();
  }

  removeOne() {
    this.cartService.removeFromCart(this.orderMenu)
    this.setOrderPrice();
  }

  setOrderPrice() {
    this.orderPrice = (this.orderMenu.menu.price) * (this.orderMenu.quantity || 1);
  }


}
