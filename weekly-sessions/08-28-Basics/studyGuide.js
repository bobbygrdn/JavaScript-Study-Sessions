//! Basic JavaScript 

// Methods for using JavaScript in HTML

    // Internal
        // <script type="text/javascript">
            // JS code goes here
        // </script>
    // External
        // <script src="script.js"></script>

// Comments
    // -> Single line comment
    
    /** Multiple
     * line
     * comment
     */

// Methods for interacting with the terminal

    // console.log() -> Used to log statements to the table. Great for debugging code.
        // console.log('This is my first console log statement')

    // console.table() -> Used to see data in an organized and digestible manner. Great for objects or JSON
        // console.table({
        //     0: 'Name',
        //     1: 'Age',
        //     2: 'Gender'
        // })

        // console.log({
        //     "orderID": 12345,
        //     "shopperName": "John Smith",
        //     "shopperEmail": "johnsmith@example.com",
        //     "contents": [
        //       {
        //         "productID": 34,
        //         "productName": "SuperWidget",
        //         "quantity": 1
        //       },
        //       {
        //         "productID": 56,
        //         "productName": "WonderWidget",
        //         "quantity": 3
        //       }
        //     ],
        //     "orderCompleted": true
        //   })
        // console.table({
        //     "orderID": 12345,
        //     "shopperName": "John Smith",
        //     "shopperEmail": "johnsmith@example.com",
        //     "contents": [
        //       {
        //         "productID": 34,
        //         "productName": "SuperWidget",
        //         "quantity": 1
        //       },
        //       {
        //         "productID": 56,
        //         "productName": "WonderWidget",
        //         "quantity": 3
        //       }
        //     ],
        //     "orderCompleted": true
        //   }) 

        // console.assert() -> Used to check a condtional and log statements if the result is false
            let num = 10;
        // console.assert(num > 20, "num is greater than 20", {"ErrorCode":'A56498'});

        // console.count() -> Used to count how many times an operation is being completed
            function loop() {
                let array = [5,65,7,5,7,4,85,4,85];
                for (let i = 0; i < array.length; i++) {
                    console.count("Count");
                    console.log(array[i])
                }
                return array;
            }
            // loop()

        // console.error() -> Used to detect errors and log what that error is to the console
            let num1 = 30, num2 = 57;
            if (num2 < 50) {
                // console.log(num2 - num1);
            } else {
                // console.error("Number is too big!")
            }
    
// Data Types -> Objects, arrays, numbers, strings, booleans, null, and undefined

    // Primitive Data Types (passed by value)

        // Strings
            let firstString  = 'Hello World!';

        // Numbers
            let currentDate = 2022;

        // Booleans
            true
            // console.log(10 === '10')

            false
            // console.log(10 == '10')

        // Undefined (Variable declared but it has no value currently)
            let placeholderText; // -> Equals undefined. Variable is created with no value.

        // Null (An assignment value that can be used as a placeholder in objects or variables)
            let currentSum = null; // -> Variable is created and current value is set to null.

    // Non-Primitive Data Types (passed by reference)

        // Object Literals

            // Variable Assignment
                const newObj = { };
                // console.log(newObj);

            // New Keyword
                const obj = new Object();
                // console.log(obj);

            // Properties

                const studentObject = {

                    firstName: 'Charles',
                    lastName: 'Robbins',
                    age: '28',
                    course: 'Web Dev'

                };

                // Accessing Properties
                    'firstName'; // -> Property name of studentObject
                    studentObject.firstName; // -> Charles
                    studentObject['lastName']; // -> Robbins

                // Adding Properties
                    studentObject.school = 'Galvanize';
                    // console.log(studentObject);

                // Deleting Properties
                    delete studentObject.course;
                    // console.log(studentObject)

        // Array Literals

            // Variable Assignment
                const newArray = [ ];
                // console.log(newArray)

            // New Keyword
                const arr = new Array()
                // console.log(arr) 

            // Accessing data
                const numsArray = [486,687,844,9879,877]
                numsArray[2] // -> 844
                numsArray[0] // -> 486

// Variables

    // Variable Types/Reassignment

        // var (ES5 Syntax, Mutable)
            var name = 'Christopher';
            name = 'Chris';
            // console.log(name)

        // const (ES6, Used to defined variables that should not be changed, Immutable)
            const lastName = 'Robin';
            // lastName = 'Smith';
            // console.log(lastName)

        // let (ES6, Most used, Muttable, block scoped)
            let year = 2022;
            year = 2023;
            // console.log(year)

    // Scope

        // Block Scope (Can only be accessed inside the block they are created in)

            // const (cannot be accessed outside the block)
            {const first_name = 'George'}
            // console.log(first_name)

            // let (cannot be accessed outside the block)
            {let x = 28}
            // console.log(x)

            // var (can be accessed outside the block)
            {var serial = 'A859'}
            // console.log(serial)

        // Local/Function Scope (Can only be accessed inside the function they are created in)

            function test () {

                // const 
                const test1 = 'George';
                console.log(test1)

                // let 
                let test2 = 28;
                console.log(test2)

                // var 
                var test3 = 'A859';
                console.log(test3)
            }
            // test()

            // console.log(test1)
            // console.log(test2)
            // console.log(test3)

        // Global Scope (Can be accessed throughout the file they are in)

            // const 
                const age = 31;
                // console.log(age)

            // let 
                let newString = 'Scoping!';
                // console.log(newString)

            // var 
                var i = 95469;
                // console.log(i)

// Increment/Decrement Operators
    
    // Increment Operator (Used to increase a given value. Used in loops and other methods.)
        'i++' // -> increases i by 1 each time it is called
        'x+=3' // -> increases x by 3 each time it is called
        '++y' // -> increases y by 1 each time it is called

    // Decrement Operator (Used to decrease a given value. Used in loops and other methods.)
        'i--' // -> decrease i by 1 each time it is called
        'x-=3' // -> decrease x by 3 each time it is called
        '--y' // -> decrease y by 1 each time it is called

// Operators

    // Comparison Operators
    
        // Equal to
            '=='
            // console.log(10 == '10') // -> true because the number 10 is contained in the string
            // console.log(10 == '20') // -> false because the number 10 is not contained in the string

        // Equal value and Equal type
            '==='
            // console.log(5 === 5) // -> true because they are strictly equal by value and type
            // console.log(5 === '5') // -> false because they are not strictly equal by value and type
        // Not equal
            '!=='
            // console.log(10 != 20) // -> true because 10 is not equal to 20
            // console.log(10 != '10') // -> false because the number 10 is contained in the string

        // Not equal value or not equal type
            '!=='
            // console.log(5 !== '5') // -> true because one is a number and the other is a string
            // console.log(8 !== 5) // -> true because the value of 8 is not equal to the value of 5

        // Greater than
            '>'
            // console.log(10 > 5) // -> true beacuse 10 is greater than 5
            // console.log(5 > 20) // -> false because 5 is not greater than 10

        // Less than
            '<'
            // console.log(5 < 10) // -> true because 5 is less than 10
            // console.log(20 < 15) // -> false because 20 is not less than 15

        // Greater than or equal to
            '>='
            // console.log(10 >= 10) // -> true because 10 is equal to 10
            // console.log(12 >= 8) // -> true because 12 is greater than 8

        // Less than or equal to
            '<='
            // console.log(12 <= 10) // -> false because 12 is greater than 10
            // console.log(20 <= 22) // -> true becasue 20 is less than 22

    // Logical Operators

        // And
            '&&'
            // console.log(10 > 5 && 20 < 30) // -> true because both conditions are met
            // console.log(10 == '10' && 20 < 15) // -> false because both conditions are not met

        // Or
            '||'
            // console.log(10 > 5 || 15 > 20) // -> true because one of the conditions was met
            // console.log('57' === 57 || 537 == '537') // -> true because one of the conditions was met

        // not 
            '!'
            // console.log(!(5 == 5)) // -> false because the number 5 is in the string of 5
            // console.log(!(10 == 10)) // -> false because the two data types are not equal

    // Ternary Operator (Used to check a conditional and return a value if it is true or if it is false)
        let personAge = 22
        let ableToVote = (personAge < 18) ? 'They are too young': 'They are old enough'
        // console.log(ableToVote)

    // Modulo Operator (Used to find the remainder of two numbers. Great for checking if number is odd or even)
        6 % 3 // -> Result should be a remainder of 0 because 6 is divisible by 3, 2 times with 0 remaining
            // This method can be used to find that 6 is an even number

        5 & 2 // -> Result should be a remainder of 1 because 6 is divisible by 2, 2 times with 1 remaining
            // This method can be used to find that 5 is an odd number
    
    // Assignment Operators
            
        // Basic Assignment Operator
            '='
            let nums = [6,12];
            const numObj = { x: 12, y: 26 };
    
        // Addition Assignemnt
            '+='
            let y = 3;
            let x = 4;
            x += y;
            // console.log(x) // -> 7 beacuse we added x and y together

        // Subtraction Assignemnt
            '-='
            let a = 3;
            let b = 4;
            b -= a;
            // console.log(b) // -> 1 because we subtracted a from b

        // Multiplication Assignemnt
            '*='
            let e = 3;
            let f = 4;
            e *= f;
            // console.log(e) // -> 12 beacuse multiplied e and f

        // Division Assignemnt
            '/='
            let g = 12;
            let o = 4;
            g /= o;
            // console.log(g) // -> 3 beacuse we divided g by o

// Loops
    
    // for (Loops over an object or an array and enacts whatever code you input to each element)
        let numArray = [8845,87,9874864,98746,15,68465]
        for (let i = 0; i < numArray.length; i++) {
            const current = numArray[i];
            // console.log(current+100)
        }

    // for in (Loops over an object literal and enacts whatever code you input to each element)
        let namesObject = {

            0: 'James Harden',
            1: 'Smith Robbins',
            2: 'Alicia Romanov',
            3: 'Michael Simmons'

        }
        for (let key in namesObject) {
            const current = namesObject[key];
            // console.log('Manager: ' + current)
        }
        
    // for of (Loops over an array and enacts whatever code you input to each element)
        let namesArray = ['James Harden','Smith Robbins','Alicia Romanov','Michael Simmons']
        for (let name of namesArray) {
            // console.log('Manager: ' + name);
        }
    
    // for each (Loops over an array and enacts a given callback function on each element)
        let managerArray = ['James Harden','Smith Robbins','Alicia Romanov','Michael Simmons']

        // managerArray.forEach(addPostiion)

        function addPostiion(name) {
            console.log("Manager: " + name)
        }

    // while
        let number = 100;
        while (number > 90) {
            // console.count('Still too high!')
            number--
        }

    // do while
        let newNumber = 20;
        do {
            // console.count('Still going');
            newNumber--;
        } while (newNumber > 8)


// Conditionals

// Basic Functions

    // Inputs/Parameters

// Methods

    // String Methods

        // String.concat()

        // String.indexOf()

        // String.split()

        // String.toLowerCase()

        // String.toUpperCase()

    // Array Methods

        // Array.unshift()

        // Array.shift()

        // Array.push()

        // Array.pop()

        // Array.slice()

        // Array.splice()

        // Array.filter()

        // Array.map()

        // Array.forEach()

        // Array.reverse()

        // Array.toString()

   // Object Methods

        // Object.assign()

        // Object.keys()

        // Object.create()

// Concatentation

// Arguments

// Statements

// Expressions

// Sum

// Return

// Switch Statements

//! Command Line Interface (CLI) , Git & GitHub

// Repositories

    // local

    // Remote

// GitHub Actions

    // Fork

    // Clone

    // Pull Request

// Git Commands

    // Master Branch

    // Commit

    // Push

// CLI Commands

    // ls

    // cd

    // pwd

    // man

    // mv

    // cp

    // mkdir

    // code .

    // npm install