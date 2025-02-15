import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs';
import { MenuItem } from './menu-item/menu-item.model';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }
}
