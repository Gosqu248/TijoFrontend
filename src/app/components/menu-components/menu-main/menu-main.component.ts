import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../../interface/restaurant';
import {RestaurantService} from '../../../services/restaurant.service';
import {MenuBasketComponent} from '../menu-basket/menu-basket.component';
import {MenuMenuComponent} from '../menu-menu/menu-menu.component';

@Component({
  selector: 'app-menu-main',
  standalone: true,
  imports: [
    MenuBasketComponent,
    MenuMenuComponent
  ],
  templateUrl: './menu-main.component.html',
  styleUrl: './menu-main.component.css'
})
export class MenuMainComponent implements OnInit {
  restaurantId: number = 0;
  restaurant: Restaurant = {} as Restaurant;
  image: string = '';

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurant();

  }

  getRestaurant() {
    if (typeof sessionStorage !== 'undefined') {

      const restaurantId = sessionStorage.getItem('restaurantId');
      if (restaurantId) {
        const id = parseInt(restaurantId);
        this.restaurantId = id;
        this.restaurantService.getRestaurantById(id).subscribe((data: Restaurant) => {
          this.restaurant = data;
          this.image = data.imageUrl;
        });
      }
    }
  }
}
