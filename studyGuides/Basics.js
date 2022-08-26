//! Basic JavaScript 

// Methods

   // Object Methods

        const thisObject = {
            A: 23,
            B: 58,
            C: 82
        }
        // Object.assign() // -> Assigns all properties from an object(s) to a target object
            const anotherObject = {
                D: 358,
                E: 465
            }
            const combine = Object.assign(anotherObject, thisObject);
            // console.log(anotherObject); // -> Returns the combined object { D: 358, E: 465, A: 23, B: 58, C: 82 }

        // Object.keys() // -> Returns an array of the keys of a given object
            const objKeys = Object.keys(thisObject);
            // console.log(objKeys); // -> Returns [ 'A', 'B', 'C' ] which is an array of the keys in the given object  

        // Object.create() // -> Creates a new object using a template object or an empty object
            const createObject = Object.create(null);
            const fillObject = Object.create(anotherObject);
            // console.log(createObject); // -> console logs the blank object created
            // console.log(fillObject.C); // -> console logs 82 because that is the value of 'C' that was copied from the copied object

// Concatentation (There are several ways to concat different elements, here are three great methods)

    // The + Operator (Adds the next element to the previous element using the + or += operator(s))
        const createString = 'Hello' + ' ' + 'World';
        let anotherString = 'Hello';
        anotherString += ' ';
        anotherString += 'my name is John.'
        // console.log(createString); // -> console logs Hello World
        // console.log(anotherString); // -> console logs Hello my name is John.

    // Array.join() // -> Joins the elements in the given array an turns them into a string
        const stringArray = ['Hello', ' ', 'there!'].join('');
        const anotherStringArray = ['a','b','c'].join();
        // console.log(stringArray); // -> console logs Hello there!
        // console.log(anotherStringArray); // -> console logs a,b,c

    // string.concat() // -> Uses a selected string to start with and adds the input element(s)
        const string1 = 'Hello';
        const string2 = string1.concat(' ', 'World');
        // console.log(string2); // -> console logs Hello World

// Statements (Statements in JavaScript are separated by ; and are usually on seperate lines as well)

    // Statements are instructions for the JavaScript runtime environment to run through line by line
        const thirdName = 'George Robbins'; // Creates a string variable
        const nameObjects = {
            Manager: 'Robin Marks',
            Supervisor: 'Charles Extanti'
        }; // -> Creates an object
        const arrayOfNumbers = [5,89,34,777,16]; // -> Creates an array of numbers
        arrayOfNumbers.pop(); // -> Uses the pop method to remove the last element of the arrayOfNumbers 
    
// Expressions
    
    // Expressions in Javascript are valid sets of literals, variables, operators and expressions that evaluate to a single value
    // This single value can be a number, string, or logical value depending on the expression
        function callAdd(x,y) {
            let z = x + y;
            return z;
        }
        // console.log("Addition : " + callAdd(7,4)); // -> Console logs Addition : 11 because it starts with a string and calls a funciton which returns a value to concat on to the string
        
// Sum

// Switch Statements


//! Command Line Interface (CLI) , Git & GitHub

// Repositories

    // local (This will be the local folder that is on your computer which contains all the files and code of the project)

    // Remote (This will be the code base that holds all the files, folders and code on the internet using GitHub)

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



