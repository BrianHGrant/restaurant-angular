import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'rate-restaurant',
  inputs: ['restaurant'],
  outputs: ['onSubmitRateForm'],
  template: `
    <h2>Rate Restaurant</h2>
    <h3>Choose Stars</h3>
    <select class="filter" #chooseStars>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <input type="number" class="input-lg" #chooseWaitTime>
    <button (click)="rateRestaurant(chooseStars, chooseWaitTime)">Rate It</button>
  `
})

export class RateRestaurantComponent {
  public onSubmitRateForm: EventEmitter<Number[]>
  constructor(){
    this.onSubmitRateForm = new EventEmitter();
  }
  rateRestaurant(chooseStars: HTMLInputElement, chooseWaitTime: HTMLInputElement) {
    this.onSubmitRateForm.emit([parseInt(chooseStars.value), parseInt(chooseWaitTime.value)]);
    chooseStars.value= "";
    chooseWaitTime.value= "";

  }
}
