import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],

  template: `
    <h3>{{restaurant.name}} | Specialty: {{restaurant.specialty}}</h3>

  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;


}


//
// | Address: {{restaurant.address}} | Cost: {{restaurant.cost}} | Rating: {{restaurant.stars}} Stars | Wait Time: {{restaurant.waitTime}} min
