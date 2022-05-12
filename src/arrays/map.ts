import { SampleWrapper } from '../common/sample-wrapper';

export class Map implements SampleWrapper {
    constructor() {
        this.samples();
    }

    samples(): void {
        console.log('create array of square roots');
        const values = [2, 3, 4];
        const squared = values.map(value => Math.sqrt(value));
        console.log(
            'Array map array of square roots - ' + JSON.stringify(squared)
        );
    }
}
