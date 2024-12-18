import {Component, Input} from '@angular/core';
import {OrderMenu} from '../../../interface/order-menu';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-order-menu-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './order-menu-item.component.html',
  styleUrl: './order-menu-item.component.css'
})
export class OrderMenuItemComponent {
  @Input() menuItem!: OrderMenu;

}
