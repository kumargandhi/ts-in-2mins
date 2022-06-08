import { Arrays } from './arrays';
import { BasicsRxJS } from './rxjs/basics-wrapper';

export function hello(world = 'world'): string {
    return `Hello ${world}! `;
}

console.log('index file - ' + hello());

const arrays = new Arrays();
const rxjsSamp = new BasicsRxJS();
