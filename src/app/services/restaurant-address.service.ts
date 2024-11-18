import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchedRestaurant} from '../interface/searched-restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAddressService {
  private apiUrl = environment.api + '/api/restaurantAddress';
  constructor(private http: HttpClient) {}


  searchedRestaurant(address: string): Observable<SearchedRestaurant[]>{
    return this.http.get<SearchedRestaurant[]>(`${this.apiUrl}/searchRestaurant?address=${address}`);
  }

}
