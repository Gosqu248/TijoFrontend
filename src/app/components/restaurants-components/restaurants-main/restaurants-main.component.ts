import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SearchedRestaurant} from '../../../interface/searched-restaurant';
import {RestaurantAddressService} from '../../../services/restaurant-address.service';
import {RestaurantItemComponent} from '../restaurant-item/restaurant-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-restaurants-main',
  standalone: true,
  imports: [
    FormsModule,
    RestaurantItemComponent,
    NgForOf
  ],
  templateUrl: './restaurants-main.component.html',
  styleUrl: './restaurants-main.component.css'
})
export class RestaurantsMainComponent implements OnInit{
  searchedRestaurants: SearchedRestaurant[] = [];


  constructor(private restaurantAddressService: RestaurantAddressService) {}

  ngOnInit() {
    this.loadRestaurant();

  }

  loadRestaurant() {
    const address = sessionStorage.getItem('searchAddress');
    if (!address) {
      throw new Error('No address found');
    }
    this.restaurantAddressService.searchedRestaurant(address).subscribe((data: SearchedRestaurant[]) => {
      console.log(data);
      this.searchedRestaurants = data;
    });
  }

  getRestaurantQuantity() {
    return this.searchedRestaurants.length;
  }


}
