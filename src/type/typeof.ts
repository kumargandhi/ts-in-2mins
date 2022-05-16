// prints type of
console.log(typeof 'Hello');
console.log(typeof 1);
console.log(typeof []);
console.log(typeof true);

// using typeof operator as context
let s = 'Hello';
let n: typeof s;
//@ts-ignore
console.log(typeof n);

