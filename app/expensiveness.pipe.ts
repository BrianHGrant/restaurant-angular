import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "expensiveness",
  pure: false
})
export class ExpensivenessPipe implements PipeTransform{
  transform(input: Restaurant[], info){
    var desiredExpensiveness = info[0];
    var output: Restaurant[]= [];
    for(var i = 0; i < input.length; i++){
      if(input[i].cost === desiredExpensiveness){
        output.push(input[i]);
      }
      else
      {
        if(desiredExpensiveness ==="showall"){
          output.push(input[i]);
        }
      }

    }
    return output;

  }
}
