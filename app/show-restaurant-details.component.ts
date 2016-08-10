import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'show-restaurant-details',
  inputs: ['restaurant'],
  template: `
    <div class="details-list">
      <h3>Address: {{restaurant.address}} </h3>
      <h3>Cost: {{restaurant.cost}}</h3>
      <h3>Rating: {{restaurant.stars}} Stars</h3>
      <h3>Wait Time: {{restaurant.waitTime}} min</h3>
    </div>
  `
})

export class ShowRestaurantDetailsComponent {
  public restaurant: Restaurant;
}
