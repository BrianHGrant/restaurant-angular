export class Restaurant{
  public starArray: number[] = [];
  public timeArray: number[] = [];
  constructor(public name: string, public specialty: string, public address: string, public cost: string, public stars?: number, public waitTime?: number){

  }
}
