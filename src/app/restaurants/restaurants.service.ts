import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Http } from '@angular/http';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { ErrorHandler } from 'app/app.error-handler';

@Injectable()

export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response =>
      response.json()).catch(
        ErrorHandler.handleError
      );
  }

  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response =>
      response.json()).catch(
        ErrorHandler.handleError
      );
  }

}
