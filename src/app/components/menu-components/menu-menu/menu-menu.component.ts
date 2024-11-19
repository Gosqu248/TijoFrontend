import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MenuItemComponent} from '../menu-item/menu-item.component';
import {NgForOf} from '@angular/common';
import {MenuService} from '../../../services/menu.service';
import {Menu} from '../../../interface/menu';
import {Restaurant} from '../../../interface/restaurant';
import {RestaurantService} from '../../../services/restaurant.service';

@Component({
  selector: 'app-menu-menu',
  standalone: true,
  imports: [
    FormsModule,
    MenuItemComponent,
    NgForOf
  ],
  templateUrl: './menu-menu.component.html',
  styleUrl: './menu-menu.component.css'
})
export class MenuMenuComponent implements OnInit{
  @Input() restaurantId!: number;
  menu: Menu[] = [];
  categories: string[] = [];
  restaurant: Restaurant = {} as Restaurant;

  constructor(private menuService: MenuService,
              private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.getRestaurant()
    this.getCategories();
    this.getMenu();
  }

  getRestaurant() {
    if (this.restaurantId) {
      this.restaurantService.getRestaurantById(this.restaurantId).subscribe((data: Restaurant) => {
        this.restaurant = data;
      });
    }
  }

  getCategories() {
    if (this.restaurantId) {
      this.menuService.getCategories(this.restaurantId).subscribe(categories => {
        this.categories = categories;
      });
    }
  }

  getMenu() {
    if (this.restaurantId) {
      this.menuService.getMenuByRestaurantId(this.restaurantId).subscribe(menu => {
        this.menu = menu;
      });
    }
  }
}
