import {OrderMenu} from './order-menu';
import {Restaurant} from './restaurant';

export interface Order {
  totalPrice: number;
  restaurant: Restaurant;
  orderMenus: OrderMenu[];
}

export interface OrderDTO {
  id: number;
  orderDate: string;
  orderMenus: OrderMenu[];
  restaurantId: number;
  restaurantName: string;
  restaurantLogo: string;
  totalPrice: number;
}
