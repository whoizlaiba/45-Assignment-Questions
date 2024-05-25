/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
 invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you
 pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
 invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.*/

// Original array before removing guests
let latestGuests:string[]=[ 'Nooray','Sir amjad','Zain shah','Mahnoor',
'Murk','Noor un nisa','Durani']
console.log("\tUnfortunately, I can only invite two people for dinner.\n");

while(latestGuests.length>2){
let removed = latestGuests.pop()
console.log(`\tSorry ${removed}, I can't invite you to dinner`);
}
console.log("=".repeat(63));
for(let i=0;i<latestGuests.length;i++){
    console.log(`${latestGuests[i]} you are still invited`);
}
console.log("=".repeat(63));

latestGuests.splice(0,2)
console.log(latestGuests);

