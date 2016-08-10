import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: "edit-restaurant-details",
  inputs: ['restaurant'],
  template: `
  <div class="edit-form">
  <hr>
    <h2>Edit Restaurant Details</h2>
    <div class="row">
      <div class="col-md-6">
        <h3>Edit name:</h3>
        <input [(ngModel)]="restaurant.name" class="input-lg">
      </div>
      <div class="col-md-6">
        <h3>Edit Specialty:</h3>
        <input [(ngModel)]="restaurant.specialty" class="input-lg">
      </div>
      <div class="col-md-6">
        <h3>Edit Address:</h3>
        <input [(ngModel)]="restaurant.address" class="input-lg">
      </div>
    </div>
  </div>
  `
})

export class EditRestaurantDetailsComponent {
  public restaurant: Restaurant;
}
