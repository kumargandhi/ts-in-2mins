import { SampleWrapper } from '../common/sample-wrapper';

export class Reduce implements SampleWrapper {
    constructor() {
        this.samples();
    }

    samples(): void {
        console.log('calculate sum of all numbers');
        const total = [1, 2, 3, 4].reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        });
        console.log('Array reduce calculate sum = ' + total);

        // counting instances of a value
        const friends = [
            'Chandler',
            'Monica',
            'Ross',
            'Racheal',
            'Joey',
            'Pheabe',
            'Chandler',
        ];
        const bingCount = friends.reduce((previousValue, currentValue) => {
            if (currentValue in previousValue) {
                //@ts-ignore
                previousValue[currentValue]++;
            } else {
                //@ts-ignore
                previousValue[currentValue] = 1;
            }
            return previousValue;
        }, {});
        console.log(
            'Array reduce count of value instances = ' +
                JSON.stringify(bingCount)
        );
    }
}
