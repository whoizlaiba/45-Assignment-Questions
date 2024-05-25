/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
 if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favourite_fruits: string[] = ["Mango", "Apple", "Banana"];

if (favourite_fruits.includes("kiwi")) {
  console.log("I Really Like Kiwis");
}
if (favourite_fruits.includes("Orange")) {
  console.log("I Really Like Oranges");
}
if (favourite_fruits.includes("Mango")) {
  console.log("I Really Like Mangoes");
}
if (favourite_fruits.includes("Apple")) {
  console.log("I Really Like Apples");
}
if (favourite_fruits.includes("Banana")) {
  console.log("I Really Like Bananaa");
}
