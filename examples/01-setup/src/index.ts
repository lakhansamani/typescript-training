let sports: string = 'football';
function greet(name: string) {
  return `Hello ${name}`;
}
console.log(greet('John'));
// Type union
type NumberOrString = number | string;
let x: NumberOrString = 10;

// Type assertion
let y: unknown = 10;
console.log((y as number) + 10);

// Unknown type check
// if (y <= 10) {
//   console.log(`hello`);
// }

type NonNullableExample<T> = T extends null | undefined ? never : T;
type A = NonNullableExample<boolean>; // boolean
type B = NonNullableExample<null>; // never
type C = NonNullableExample<undefined>; // never
type D = NonNullableExample<null | undefined>; // never

let z: string[] = ['a', 'b', 'c'];

interface Person {
  name: string;
  age: number;
}
