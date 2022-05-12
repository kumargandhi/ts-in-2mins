import {SampleWrapper} from "../common/sample-wrapper";

export class ForEach implements SampleWrapper {

  constructor() {
    this.samples();
  }

  samples(): void {
    console.log('print contents of each item in an array');
    const friends = ['Chandler', 'Monica', 'Ross', 'Racheal', 'Joey', 'Pheabe', 'Chandler'];
    friends.forEach((friend) => {
      console.log(friend);
    });
  }
}
