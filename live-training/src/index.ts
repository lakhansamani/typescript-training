import { NumberOrString, User } from './types/index';

let x: number | string = 1;
let y: number = 2;

function greet(name: string) {
  return `Hello ${name}`;
}

console.log(greet('World'));

let p: unknown = 10;
p = 'adbc';
p = true;

function throwErr(): never {
  throw new Error('Error');
}

// arrays

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuples
let abc: [string, number] = ['hello', 10];

///

//user fetch
// const { data: userData, error: userError } = fetch(``);
// // bill fetch
// const {data: billData, error: billError} = fetch(``);

let direction: 'Up' | 'down' = 'Up';
let optinalValues: string | null | undefined;

let user: {
  name: string;
  age?: string;
};

let abx: NumberOrString;
abx = '1';

let u1: User = {
  id: 1,
  name: 'John',
};

function totalNumberOfItems(user: { id: string; items: string[] }): number {
  return user.items.length;
}

console.log(
  totalNumberOfItems({
    id: '1',
    items: ['a', 'b'],
  })
);
