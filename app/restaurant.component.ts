import { Component, EventEmitter } from 'angular2/core';
import { RestaurantListComponent } from './restaurant-list.component';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
    <h3>{{restaurant.name}} | Specialty: {{restaurant.specialty}}</h3>
    <button [class.selected]="restaurant === selectedRestaurant" [restaurant]="restaurant" (click)="restaurantClicked(restaurant)">Edit</button>
  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  constructor(){
    this.onRestaurantSelect = new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
  }
}


//
// | Address: {{restaurant.address}} | Cost: {{restaurant.cost}} | Rating: {{restaurant.stars}} Stars | Wait Time: {{restaurant.waitTime}} min
