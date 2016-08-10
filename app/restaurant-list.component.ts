
import {Component, EventEmitter} from 'angular2/core';
import {RestaurantComponent} from './restaurant.component';
import {Restaurant} from './restaurant.model';
import {ShowRestaurantDetailsComponent} from './show-restaurant-details.component';
import {EditRestaurantDetailsComponent} from "./edit-restaurant.component";


@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  outputs: ['onRestaurantSelect'],
  directives: [ShowRestaurantDetailsComponent, EditRestaurantDetailsComponent, RestaurantComponent],
  template: `
  <restaurant-display *ngFor="#currentRestaurant of restaurantList"  [class.selected]="currentRestaurant ===selectedRestaurant"(click)="restaurantClicked(currentRestaurant)"[restaurant]="currentRestaurant"></restaurant-display>
  <show-restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></show-restaurant-details>
  <edit-restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></edit-restaurant-details>
  `
})

export class RestaurantListComponent{
  public restaurantList : Restaurant[];
  public selectedRestaurant: Restaurant;
  public onRestaurantSelect: EventEmitter<Restaurant>;
  constructor(){
    this.onRestaurantSelect= new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
    console.log(this.selectedRestaurant);

  }
}
