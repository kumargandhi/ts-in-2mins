import { Reduce } from './reduce';
import { Map } from './map';
import { ForEach } from './forEach';
import { ModuleWrapper } from '../common/sample-wrapper';

export class Arrays implements ModuleWrapper {
    constructor() {
        this.execute();
    }

    execute() {
        const reduce = new Reduce();

        const map = new Map();

        const forEach = new ForEach();
    }
}
