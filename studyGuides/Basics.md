# Basic JavaScript

Basic JavaScript can be a bit hard to learn at first, but with a bit of studying and hardwork I know you will get it. Here is some extra documentation to reinforce what you have learned so far.

## Linking JavaScript to HTML

```javascript
This is how it will look if you put your script in the body tag
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

</head>
<body>
    <script type="text/javascript">
        // javascript code will code here
    </script>
</body>
</html>
```

```javascript
This is how it will look if you link your script in the body tag
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <script defer src="script.js"></script>
</head>
<body>

</body>
</html>
```

## Adding Pseudocode(comments)

```javascript
// -> This is used to add single line comments into your code
```

```javascript
/** This is how you
 * can add multiple
 * line comments
 */
```

## Methods to interact with the console

console.log( ) -> Used to log statements to the console. Great for debugging code.

```javascript
console.log("Any comment or statement I want to make to the console");
```

console.table( ) -> Used to see data in an organize and digestible manner. Great for objecs, arrays or JSON.

```javascript
console.table({0: 'Name', 1: 'Age', 2: 'Gender'});

// This returns the following table:
______________________
| (index)  | Values  |
|----------|---------|
|    0     |  'Name' |
|    1     |  'Age'  |
|    2     | 'Gender'|
|__________|_________|
```

console.assert( ) -> Used to check a conditional and log a statement if the result is false

```javascript
let num = 10;
console.assert(num < 5, "num is greater than 5");

// This returns the following statement:
Assertion failed: num is less than 5
```

console.count( ) -> Used to count how many times an operatons is being run. Great to keep track of loops.

```javascript
let array = [5, 65, 7, 5, 7, 4, 85, 4, 85];

for (let i = 0; i < array.length; i++) {
  console.count("Count");
}

// This returns statements that look like this:
Count: 1;
Count: 2;
Count: 3;
Count: 4;
Count: 5;
Count: 6;
Count: 7;
Count: 8;
Count: 9;

// This tells me my loop ran 9 times which let me loop over every element in the array.
```

console.error( ) -> Used to detect errors and logs what that error is to the console.

```javascript
let num1 = 30, num2 = 57;
if(num2 < 50) {
    console.log(num2 - num1);
} else {
    console.error("Number 2 is too big!");
}

// This returns the following statement in the console:
Number is too big!

// This tells me that num2 was caught by my console.error() statement because it was too high of a number
```

## Data Types

### Primitive Data Types (Passed by value)

Strings (A vaule surrounded by ' ' or " ")

```javascript
"Hello World!";

"This is a string!";

"Lets put one more string in here!";
```

Numbers

```javascript
2022;
45;
468;
```

Booleans (True or False)

```javascript
true;

console.log(10 > 5);
// This console log returns true because 10 is greater than 5

false;
console.log(20 === "20");
// This console log returns false because the first value is a number and the second is a string
```

Undefined

```javascript
let placeHolderText;
console.log(placeHolderText);
// This will console log undefined because the placeHolderText variable has been declared with no value
```

Null (An assignment value that can be used as a placeholder)

```javascript
null;
let currentSum = null;
// The value of currentSum is equal to null which means it has an empty but defined value.
```

### Non-Primitive Data Types (Passed by reference)

Object Literals (A value to a variable that is surrounded by { } )

#### Variable Assignment

```javascript
const newObj = {};
// This newObj variable has been defined with an empty object value
```

#### New Keyword

```javascript
const obj = new Object();
// This obj variable has been defined and given a value with the new object method
```

#### Accessing Properties

```javascript
const studentObject = {
    firstName: 'Charles',
    lastName: 'Robbins',
    age: '28',
    course: 'Web Dev'
};

'firstName' -> Property name of studentObject
studentObject.firstName; -> Charles
// This property value was accessed by using Dot Notation with the property name

'lastName' -> Property name of studentObject
studentObject['lastName']; -> Robbins
// This property value was accessed by using Bracket Notation with the property name
```

#### Adding Properties

```javascript
studentObject.school = "Galvanize";
// This adds a school property to the studentObject and sets the value to 'Galvanize'
```

#### Deleting Properties

```javascript
delete studentObject.course;
// This deletes the course property from the studentObject
```

Array Literals (A value to a variable that is surrounded by [ ] )

#### Variable Assignment

```javascript
const newArray = [];
// This newArray variable has been defined with an empty array value
```

#### New Keyword

```javascript
const arr = new Array();
// This arr variable has been defined and given a value with the new array method
```

#### Accessing Data (Data in arrays are accessed by index which follows a zero-index model)

```javascript
const numsArray = [586,687,844,9879,877];
numsArray[0]; -> 586
// The first index of the array which has an index of 0 has a value of 586

numsArray[2]; -> 844
// The third index of the array which has an index of 2 has a value of 844
```

### Variables

#### Variable Types/Reassignment

##### var (ES5 Suntax, Mutable)

```javascript
var name = "Christopher";
name = "Chris";
// var can be changed becuase it is a mutable variable assingment type
```

##### const (ES6, Used to define variables that should not be changed, Immutable)

```javascript
const lastName = "Robin";
lastName = "Smith";
// The value of lastName will still be Robin because const variables are immutable
```

##### let (ES6, Most used, Mutable, Block Scoped)

```javascript
let year = 2022;
year = 2023;
// The value of year will be 2023 because let is a mutable variable assignment type
```

#### Scope

##### Block Scope (Can only be accessed inside the block they are created in)

```javascript
const (cannot be accessed outside the block)
{const first_name = 'George'}
console.log(first_name)
// This will log an error because we are trying to access it outside the block

let (cannot be accessed outside the block)
{let x = 28}
console.log(x)
// This will log an error because we are trying to access it outside the block

var (can be accessed outside the block)
{var serial = 'A859'}
console.log(serial)
// This will console log A859 because var is not block scoped
```

##### Local/Function Scope (Can only be accessed inside the function they are created in)

```javascript
function test () {

    const test1 = 'George';

    let test2 = 28;

    var test3 = 'A859';
}

console.log(test1); -> This will return an error since the const variable is only accessed inside the function
console.log(test2); -> This will return an error since the let variable is only accessed inside the function
console.log(test3); -> This will return an error since the var variable is only accessed inside the function
```

##### Global Scope

```javascript
const age = 31;
let newString = 'Scoping!';
var i = 95469;

function test () {

    const test1 = 'George';

    let test2 = 28;

    var test3 = 'A859';
}

console.log(age); -> This will console log 31 since age is a global variable
console.log(newString); -> This will console log Scoping! since newString is a global variable
console.log(i); -> This will console log 95469 since i is a global variable
```
