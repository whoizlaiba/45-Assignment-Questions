/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged,
  return the new array and store it in a separate array. Call show_magicians() with each array
   to show that you have one array of the original names and one array with the Great added to 
   each magician’s name.*/

let Magicians: string[] = ["gudu", "majnu", "chambela"];
function show_magicians(itsmagic) {
  itsmagic.forEach((element) => {
    console.log(element);
  });
}

show_magicians(Magicians);

function make_great(itsmagic) {
  let jadugar: string[] = [];
  itsmagic.forEach((element) => {
    jadugar.push(element + " " + "The Great");
  });
  return jadugar;
}

let thegreatpeoples = make_great(Magicians);

show_magicians(thegreatpeoples);
show_magicians(Magicians);
