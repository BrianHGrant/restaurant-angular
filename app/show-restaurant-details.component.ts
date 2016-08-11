import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import {RateRestaurantComponent} from './rate.component';


@Component({
  selector: 'show-restaurant-details',
  inputs: ['restaurant'],
  directives: [RateRestaurantComponent],
  template: `
    <hr>
    <div class="details-list">
      <h2>Details</h2>
      <h3>Address: {{restaurant.address}} </h3>
      <h3>Cost: {{restaurant.cost}}</h3>
      <h3>Rating: {{restaurant.stars}} Stars</h3>
      <h3>Wait Time: {{restaurant.waitTime}} min</h3>
    </div>
    <hr>
    <rate-restaurant  (onSubmitRateForm)="rateCurrentRestaraunt($event)"></rate-restaurant>
    <hr>
  `
})

export class ShowRestaurantDetailsComponent {
  public restaurant: Restaurant;
  rateCurrentRestaraunt(inputArray): void{
    this.restaurant.starArray.push(inputArray[0]);
    this.restaurant.timeArray.push(inputArray[1]);
    var arraySum=this.restaurant.starArray.reduce((prev,curr)=> prev + curr);
    var arrayTimeSum= this.restaurant.timeArray.reduce((prev,curr)=> prev + curr);
    this.restaurant.stars = Math.round((arraySum/this.restaurant.starArray.length)*10)/10;
    this.restaurant.waitTime = Math.round((arrayTimeSum/this.restaurant.timeArray.length)*10)/10;
    console.log(this.restaurant.stars);
    console.log(this.restaurant.starArray);
  };
}
