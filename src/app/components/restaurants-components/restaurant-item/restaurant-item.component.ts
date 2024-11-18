import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Restaurant} from '../../../interface/restaurant';
import {RestaurantService} from '../../../services/restaurant.service';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-restaurant-item',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './restaurant-item.component.html',
  styleUrl: './restaurant-item.component.css'
})
export class RestaurantItemComponent implements OnInit{
  @Input() restaurantId!: number;
  restaurant: Restaurant = {} as Restaurant;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe((restaurant) => {
      this.restaurant = restaurant;
    });
  }






}

