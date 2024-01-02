---
theme: academic
class: text-center
highlighter: shikiji
lineNumbers: false
info: |
  ## Learn web development, react, react-native.
  Learn with Lakhan
drawings:
  persist: false
transition: slide-left
title: Typescript 101 Training
# mdc: true
---

# Welcome to Typescript-101 Training

By, Lakhan Samani<br/>
Handle: lakhansamani<br/>
Email: lakhan.m.samani@gmail.com

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/lakhansamani" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Agenda

<Toc maxDepth="1"></Toc>

---

# Env Setup for Typescript

- Install [typescript](https://www.npmjs.com/package/typescript) & [`ts-node`](https://www.npmjs.com/package/ts-node) globally for some testing

```sh
npm install -g typescript ts-node
```

---

# What is typescript

- Typescript is super-set of Javascript
- It is just like ES2015 with type-checking.
- It needs to be compiled to

---

# Why you should use TS

- It can help avoid common mistakes that could occur because of variable hoisting
- Code is more easier to read and understand

---

# Drawbacks

- It can take little longer to write TS as you will have to define types
- It can take longer time in compiling

But it's worth, as you can avoid lot of errors and make your code more strictly typed

---

# How to setup a project

- Initialize a project

```js
npm init -y`
```

- Install typescript

```
npm install typescript
```

- Initlaize typescript

```
tsc --init
```

- Change module type & target to `esnext`

---

# Primitive Types

- boolean
- number
- string
- null
- undefined
- bigint

---

- any // escape hatch, we can assign any value
- unknown // allows you to define any type but while access ts can show error
- never // opposite of any, "the never type represents the type of values that never occur."
  - Common use-case is to assign to function return type example a function that will throw error
  - Or define a complex type where a specific value is not possible
  ```js
  type NonNullable<T> = T extends null | undefined ? never : T;
  type A = NonNullable<boolean>;            // boolean
  ```
- void -> can return undefined or null but never cannot return anything

---

# How to define type for variable

```js
let x: type = value
let age: number = 10;

function sayHello(name: string): string {
  return `Hello ${name}`
}
const sayHello = (name: string): string => (
  `Hello ${name}`
)
```

---

# Arrays & Tuples

```js
let x: string[] = ['a','b','c']

type User = {
  name: string
  age?: number
}

let persons: User[] = [
  {
    name: 'bob'
  }
]
```

- Tuples

A tuple type variable can include two or multiple type

```js
let employee: [number, string] = [1, "Steve"];
```

---

# Enum

- Set of named values

Numeric enums

```js
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

we have a numeric enum where Up is initialized with 1.

```js
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

---

String enums

```js
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

---

# Union Types

- Combining one or multiple types

```js
let x: number | string = 10;
```

---

# Defining custom types

- We use `type` keyword
- It helps you define an alias for a type

```js
type NumberOrString = number | string
let x: NumberOrString = 10;
```

---

# Type assertions

```js
let x: unknown = 10
console.log(x as string)
console.log(<string> x)
```

---

# Types and type aliases

`type` is a keyword in TypeScript that we can use to define the shape of data.

example

```js
type MyNumber = number;
type User = {
  id: number;
  name: string;
  email: string;
}
```

Here, we create two type aliases: MyNumber and User. We can use MyNumber as shorthand for a number type and use User type aliases to represent the type definition of a user.

---

# Interface

An interface defines a contract that an object must adhere to

example

```js
interface User {
    name: string;
    address: string;
}
```

We can express the same `User` contract definition using type also, but there are differences!

```js
type User = {
  name: string;
  address: string
}
```

---

# Differences Between Types and Interfaces

- Interfaces can be extended with type or type alias or another interface

```js
interface PersonNameInterface { name: string }
interface Person1 extends PersonNameInterface { age: number }

type PersonNameType = { name: string }
interface Person2 extends PersonNameType { age: number }

class PersonClass { name = "Jhon" }
interface Person3 extends PersonClass { age: number }
```

---

- Types offer intersection instead of extending

```js
type PersonNameType = { name: string; }
type Person1 = PersonNameType & { age: number; }
```

- Combining two interfaces or types, we may create a new union type, which can contain one or more types using the `|` pipe operator

  - When doing a union of primitive types often use types

---

- Interfaces offers declarative merging

```js
interface Person {
  name: string
}

interface Person {
  age: number
}
const john: Person = {
  name: "John",
  age: 26,
}
```

---

# When to use interface / types

Use interfaces when:

- A new object or an object method needs to be defined.
- You wish to benefit from declaration merging.
- You wish to extend the interface

Use types when:

- You need to define a primitive-type alias
- Defining tuple types
- Defining a union
- You must create functions and attempt to overload them in object types through composition.
- Requiring the use of mapped types

---

# Optional Values

```js
interface User {
  id: string;
  email: string;
  phone_number?: string;
}
```

---

# Generics

- Generics are like variables – to be precise, type variables – that store the type (for example number, string, boolean) as a value.

```js
function printData<T>(data: T) {
    console.log("data: ", data);
}

function printData<X,Y>(data1: X, data2: Y) {
    console.log("Output is: ", data1, data2);
}

```

---

# How to use generics with interface

```js
interface UserData<X,Y> {
    name: X;
    rollNo: Y;
}

const user: UserData<string, number> = {
    name: "Ram",
    rollNo: 1
}
```

---

# Exercise time

**Create an interface for `Customer` with the following details**

- customer identifier
- organization name
- owner name
- address
- state
- city
- pin code

---

**Create an interface for `Invoices` with the following details**

- invoice identifier
- invoice date
- invoice type => Retail Invoice | Tax Invoice
- invoice items => array of items {
  article number
  name
  quantity
  per unit price
  }[]

- gst number
- amount
- sgst 9%
- cgst 9%
- customer id

---

- Create a array of invoices
- Create a new array which lists user and its array
