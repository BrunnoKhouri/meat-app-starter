import { Restaurant } from './restaurant.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {


  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.getRestaurants();   

  }

  public getRestaurants() {
    this.restaurantsService.restaurants()
      .subscribe(restaurants => {
        console.log('restau', restaurants);
        this.restaurants = restaurants;
      });
  }

}
