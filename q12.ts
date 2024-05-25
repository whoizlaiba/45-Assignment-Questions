
 /*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
 name, print a message to them. The text of each message should be the same, but each message should be
  personalized with the person’s name.*/


  let personsName:string[]=["sir amjad", "sir fahim","sir osama", "miss bushra"];
  for (let  i=0;i<personsName.length; i++ ){

    console.log(`Asalamualaikum ${personsName[i]}`);
    
  }