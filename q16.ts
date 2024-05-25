/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three
 more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
 people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
 list. • Print a new set of invitation messages, one for each person in your list.*/


 //  Peoples who are coming on dinner
 let guestsDinner:string[]=["Sir amjad","Zain shah","Murk","Noor un nisa"];
 console.log(guestsDinner);
 console.log("=".repeat(63));
 
 //After Adding one more guest at the beginning of the array
 guestsDinner.unshift("Nooray")
 console.log(guestsDinner);
 console.log("=".repeat(63));

 //After Adding one  more guest at the middle of the array
 guestsDinner.splice(3,0,"Mahnoor")
 console.log(guestsDinner);
 console.log("=".repeat(63));

 //After Adding one more guest at the last of the array
 guestsDinner.push("Durani")
 console.log(guestsDinner);
 
 console.log("=".repeat(63));

 for(let i=0; i<guestsDinner.length;i++){
    console.log(`${guestsDinner[i]}, would you like to join me for dinner?`);
 }
 



 


