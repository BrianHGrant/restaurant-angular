import {Component, EventEmitter} from 'angular2/core';
import {RestaurantComponent} from './restaurant.component';
import {Restaurant} from './restaurant.model';
import {ShowRestaurantDetailsComponent} from './show-restaurant-details.component';
import {EditRestaurantDetailsComponent} from "./edit-restaurant.component";
import {AddRestaurantComponent} from './add-restaurant.component';
import {ExpensivenessPipe} from './expensiveness.pipe';
import {RatingsPipe} from './rating.pipe';


@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  outputs: ['onRestaurantSelect'],
  pipes: [ExpensivenessPipe, RatingsPipe],
  directives: [ShowRestaurantDetailsComponent, EditRestaurantDetailsComponent, RestaurantComponent, AddRestaurantComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value ="cheap">Show Cheap</option>
    <option value ="moderate">Show Moderate</option>
    <option value ="expensive">Show Expensive</option>
    <option value ="showall" selected="selected">Show All</option>
  </select>
  <select (change)="onChangeRating($event.target.value)">
    <option value="descending" selected="selected">Sort by Stars Descending</option>
    <option value="ascending">Sort by Stars Ascending</option>
  </select>
  <restaurant-display *ngFor="#currentRestaurant of restaurantList | expensiveness:selectedExpensiveness | ratings:selectedRatings "  [class.selected]="currentRestaurant ===selectedRestaurant"(click)="restaurantClicked(currentRestaurant)"[restaurant]="currentRestaurant"></restaurant-display>
  <show-restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></show-restaurant-details>
  <add-restaurant (onSubmitForm)="createRestaurant($event)"></add-restaurant>
  <edit-restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></edit-restaurant-details>

  `
})

export class RestaurantListComponent{
  public restaurantList : Restaurant[];
  public selectedRestaurant: Restaurant;
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedExpensiveness: string = "showall";
  public selectedRatings: string = "descending";
  constructor(){
    this.onRestaurantSelect= new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
    console.log(this.selectedRestaurant);

  }
  createRestaurant(inputArray): void{
    this.restaurantList.push(
      new Restaurant(inputArray[0],inputArray[1],inputArray[2],inputArray[3])
    );
  }
  onChange(optionFromMenue){
    this.selectedExpensiveness = optionFromMenue;
     console.log(this.selectedExpensiveness);
  }
  onChangeRating(optionFromMenu){
    this.selectedRatings = optionFromMenu;
    console.log(this.selectedRatings);
  }

}
