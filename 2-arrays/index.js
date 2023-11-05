/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */

/**
 * Initialise the array `Top Shelf and add: Book, Binder, Paper
 * Then initialise the array `Bottom Shelf` add: Journal, Letter, Jar
 * Combine the two using the .concat() method and console.log out the result
 */

var topShelf = ["Book", "Binder", "Paper"];
var bottomShelf = ["Journal", "Letter", "Jar"];

var Shelf = topShelf.concat(bottomShelf);

console.log(Shelf);



/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array 
 * to create a sentence using concatenation.
 * 
 * initialise the variable `animals` to a 2-Dimensional array containing the values below:
 * 
 *          section[0]      section[1]                           
 * Row 1    Tiny            Bee     
 * Row 2    Small           Mouse                   
 * Row 3    Medium          Panther                           
 * Row 4    Large           Blue Whale   
 * 
 * then use console.table() to showcase the information in a table.
 * 
 * Then based on the values stored in the animals 2D array, console log out the following sentence (use concatenations):
 * A _Bee_ is a _Tiny_ animal
 */

var animals = [
    section0 = ["Tiny", "Small",  "Medium", "Large"],
    section1 = ["Bee", "Mouse", "Panther", "Blue Whale"],
]

console.log(`A ${animals[0][0] + ` is a ` + animals[1][1]} animal`);

console.log(`I am taking ${schedule[0][2] + `, ` + schedule[1][2]} that is worth ${schedule[2][2]} credits`);