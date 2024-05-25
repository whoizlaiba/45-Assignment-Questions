/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
 try more comparisons, write more tests. Have at least one True and one False result for each of the \
 following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
 and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

//tests for equality and inequality with strings
console.log('laiba' =='laiba');//true
console.log('laiba'!='laiba');//false
console.log("=".repeat(65));

//Tests using the lower case function
console.log('laiba'.toLowerCase()=='laiba');//true
console.log('laiba'.toLowerCase()!='laiba');//false
console.log("=".repeat(65));

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
 //and less than or equal to

 //equality and inequality 
 console.log(7==7);// true
 console.log(7!=7);//false
 //greater than and less than
 console.log(7>7);//false
 console.log(!(10>10));//true
 console.log(2<7);//true
 console.log(9<7);//false
 //greater than and equals to , less than and equals to
 console.log(55<=66);//true
 console.log(150>=1500);//false
 console.log("=".repeat(65));

// Tests using "and" and "or" operators
console.log(5>=5 && 5!=5);//false 
console.log(50 ==50 || 70<=70);//true
console.log("=".repeat(65));

//Test whether an item is in a array
let array1:string[]=['laiba','tooba','khizra']   //true 
 console.log(array1.includes('laiba'));
 
 //Test whether an item is not in a array
 console.log(array1.includes('M hussain'));   //false


 

