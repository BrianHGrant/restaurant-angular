import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'add-restaurant',
  outputs: ['onSubmitForm'],
  template: `
  <div class="container">
    <h2>Add Restaurant</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control input-lg" id="name" placeholder="Name" #addName>
    </div>
    <div class="form-group">
      <label for="specialty">Specialty:</label>
      <input type="text" class="form-control input-lg" id="specialty" placeholder="Specialty" #addSpecialty>
    </div>
    <div class="form-group">
      <label for="address">Address:</label>
      <input type="text" class="form-control input-lg" id="address" placeholder="address" #addAddress>
    </div>
    <div class="form-group">
      <select class="filter" #addCost>
        <option value="cheap">Cheap</option>
        <option value="Moderate">Moderate</option>
        <option value="expensive">Expensive</option>
      </select>
    </div>
    <button (click)="addRestaurant(addName, addSpecialty, addCost, addAddress)" class="btn btn-primary btn-lg">Add</button>
  </div>
  `

})
export class AddRestaurantComponent{
  public onSubmitForm: EventEmitter<String[]>
  constructor(){
    this.onSubmitForm = new EventEmitter();
  }
  addRestaurant(addName: HTMLInputElement, addSpecialty: HTMLInputElement, addCost: HTMLInputElement, addAddress: HTMLInputElement){
    this.onSubmitForm.emit([addName.value, addSpecialty.value, addCost.value, addAddress.value]);
    addName.value="";
    addSpecialty.value = "";
    addCost.value="";
    addAddress.value="";
  }
}
