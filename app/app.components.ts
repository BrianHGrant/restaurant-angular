import { Component, EventEmitter } from 'angular2/core';
import {Restaurant} from './restaurant.model';
import { RestaurantListComponent } from './restaurant-list.component';
@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
  <div class="container">
    <h1>Restaurants</h1>
    <hr>
    <restaurant-list [restaurantList]="restaurants">
    </restaurant-list>
  </div>
  `
})
export class AppComponent{
  public restaurants: Restaurant[];
  constructor(){
    this.restaurants = [
      new Restaurant("Lardo", "Sandwidch", "Washington & SW 12th Ave Portland, or", "cheap"),
      new Restaurant("Portobello", "Italian", "Division & SE 12th Portland,or", "expensive", 5, 30),
      new Restaurant("Bambo Sushi", "Japanese", "Stark & 12th Ave Portland, or", "Moderate", 4, 20),
      new Restaurant("Pok Pok", "Vietnamese", "Division Portland, or", "Moderate", 4.5, 45),
      new Restaurant("Taco Bell", "Mexican", "W Burnside St. Portland, Or", "cheap", 2, 2),
      new Restaurant("Imperial", "Ameircan", "Stark & 7th Ave, or", "expensive", 4.9, 45)
    ]
  }
}
