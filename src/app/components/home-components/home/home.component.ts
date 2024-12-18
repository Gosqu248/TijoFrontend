import { Component } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiUrl = environment.api;
  background: string = '/img/background.webp';
  searchAddress: string = '';

  constructor(private router: Router) {
  }
  searchRestaurants() {
    sessionStorage.setItem('searchAddress', this.searchAddress);
    this.router.navigate(['/restaurants'])
  }

  allOrders() {
    this.router.navigate(['/orders']);
  }
}


