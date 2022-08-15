import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from './../restaurants/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  id: string;
  restaurant: Restaurant;
  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getIdRoute();
    this.getRestaurantById();
  }

  public getRestaurantById() {
    this.restaurantsService.getRestaurantById(this.id).subscribe(
      restaurant => this.restaurant = restaurant
    );
  }

  public getIdRoute() {
    this.id = this.route.snapshot.params['id'];
  }
}
