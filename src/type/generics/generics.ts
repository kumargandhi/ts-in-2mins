// A simple generic class
class GenericNumber<T> {
  value: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.value = 10;
myGenericNumber.add = (x, y) => {
  return x + y;
};
