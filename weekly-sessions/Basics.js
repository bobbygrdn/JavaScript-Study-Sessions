//! Basic JavaScript, HTML, CSS / CLI, Git & Github

// Methods for using JavaScript in HTML

    // Internal

    // Internal
    // <script type="text/javascript">
    //     // JS code goes here
    // </script>
    // External
    // <script src="script.js"></script>
    
// Comments
    // -> Single line comment
    
    /** Multiple
     * line
     * comment
     */
    
// Data Types -> Objects, arrays, numbers, strings, booleans, null, and undefined

    // Primitive Data Types (passed by value)

        // Strings

        // Numbers

        // Booleans

        // Undefined

        // Null

    // Non-Primitive Data Types (passed by reference)

        // Object Literals

            // Variable Assignment

            // New Keyword

        // Array Literals

            // Variable Assignment

            // New Keyword

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

// Loops

// Conditionals

// Basic Functions

// Objects

// Arrays

