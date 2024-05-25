/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function 
called make_great() that modifies the array of magicians by adding the phrase the Great
 to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

//unmodified
 let Magicians:string[]=['gudu','majnu','chambela']
 function show_magicians(itsmagic){
 itsmagic.forEach((element)=>{console.log(element);
 })
 }
 show_magicians(Magicians)
 

//modified
 
 function make_great(itsmagic){
 for (let i=0;i<itsmagic.length;i++){itsmagic[i]="The Great"+ " "+itsmagic[i]}
 }
 make_great(Magicians)
 show_magicians(Magicians)
 

