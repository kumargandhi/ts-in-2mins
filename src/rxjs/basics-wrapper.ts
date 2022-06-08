import { SampleWrapper } from '../common/sample-wrapper';
import { getVersion } from './basics';

export class BasicsRxJS implements SampleWrapper {
    constructor() {
        this.samples();
    }

    samples(): void {
        getVersion().subscribe(version => {
            console.log('Version:' + version);
        });
    }
}
