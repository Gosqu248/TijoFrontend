import {Component, Input} from '@angular/core';
import {Menu} from '../../../interface/menu';
import {DecimalPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {OrderMenu} from '../../../interface/order-menu';
import {FilterByCategoryPipe} from '../../../pipes/filter-by-category.pipe';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    DecimalPipe,
    FilterByCategoryPipe,
    NgClass
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input() menu!: Menu[];
  @Input() category!: string;

  constructor(private cartService: CartService) {
  }

  addToCart(menu: Menu) {
    const orderMenu: OrderMenu = {
      menu: menu,
      quantity: 1
    };
    this.cartService.addToCart(orderMenu);

  }

}
