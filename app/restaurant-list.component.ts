
import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';
import {ShowRestaurantDetailsComponent} from './show-restaurant-details.component';
import {RestaurantComponent} from './restaurant.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  outputs: ['onRestaurantSelect'],
  directives: [ShowRestaurantDetailsComponent, RestaurantComponent],
  template: `
  <restaurant-display *ngFor="#restaurant of restaurantList"  [restaurant]="restaurant"></restaurant-display>


  `
})

export class RestaurantListComponent{
  public restaurantList : Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  constructor(){
    this.onRestaurantSelect = new EventEmitter();
  }

}
