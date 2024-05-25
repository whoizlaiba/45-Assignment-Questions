/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show 
that its order has changed.*/

let countries = ["Iran ", "Saudi Arabia ", "Iraq ", "Turkey ", "Nigeria "];
console.log(`original order array `,countries);
console.log("=".repeat(85));
// Alphabetical order
console.log(`Alphabetical order `,[...countries].sort());
console.log("=".repeat(85));
//showing that my array is still in original order
console.log(`Original array `,countries);
console.log("=".repeat(85));
// printing array in reverse alphabetical order
console.log(`Reverse Alphabetical Order`,[...countries].reverse());
console.log("=".repeat(85));
console.log(`original order array `,countries);
console.log("=".repeat(85));
// Original array is reversed and its order is changed
console.log(`Original Order Changed`,countries.reverse());
console.log("=".repeat(85));
// Original order is back again
console.log(`Original Order Back`,countries.reverse());
console.log("=".repeat(85));
// Sorted array so its order is changed now
console.log(`Sorted array`,countries.sort());
console.log("=".repeat(85));
// Sorted arrray so now its stored in reverse alphabetical order
console.log(`Sorted reversed array`,countries.sort().reverse());



