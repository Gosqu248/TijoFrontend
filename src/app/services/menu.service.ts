import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menu} from '../interface/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = environment.api + '/api/menu';

  constructor(private http: HttpClient) {
  }

  getMenuByRestaurantId(id: number): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.apiUrl}/getRestaurantMenu?restaurantId=${id}`);
  }

  getCategories(id: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/menuCategories?restaurantId=${id}`);
  }
}
