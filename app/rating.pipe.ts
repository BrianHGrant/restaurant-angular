import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "ratings",
  pure: false
})

export class RatingsPipe implements PipeTransform{
  transform(input: Restaurant[], info){
    console.log(input);
    console.log(info);
    var ratingSortOption = info[0];
    if (ratingSortOption === "ascending"){
      input.sort(function(a, b) {
        return a.stars-b.stars;
      })
    } else if (ratingSortOption === "descending"){
      input.sort(function(a, b) {
        return b.stars-a.stars;
      })
    }
    return input;
  }
}
