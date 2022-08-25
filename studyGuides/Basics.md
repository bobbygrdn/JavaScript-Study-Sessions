# Basic JavaScript

Basic JavaScript can be a bit hard to learn at first, but with a bit of studying and hardwork I know you will get it. Here is some extra documentation to reinforce what you have learned so far.

### Linking JavaScript to HTML

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

### Adding Pseudocode(comments)

```javascript
// -> This is used to add single line comments into your code
```

```javascript
/** This is how you
 * can add multiple
 * line comments
 */
```

### Methods to interact with the console

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
    console.error("Number 2 is too big!")
}

// This returns the following statement in the console:
Number is too big!

// This tells me that num2 was caught by my console.error() statement because it was too high of a number
```

### Data Types

\*\* Primitive Data Types (Passed by value)
