import { Arrays } from './arrays';

export function hello(world = 'world'): string {
    return `Hello ${world}! `;
}

console.log('index file - ' + hello());

const arrays = new Arrays();
