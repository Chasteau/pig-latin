// Write a program that takes any number of command line arguments,
// converts each to pig latin (the rules are in the next paragraph),
// then puts the translated words together
//  into one sentence logged to the console.

//Rules
// Convert a word to pig latin by taking its first letter,
// moving it to the end of the word, then adding "ay" after it all.

// Example Test Cases
// node pig-latin.js pig latin
// igpay atinlay

// node pig-latin.js this is all just gibberish
// histay siay llaay ustjay ibberishgay

//Steps
// string -> string
// take inputs strings from command line process.argv[2]

var input = process.argv.slice(2);
// console.log(input);
//console.log(input.join());

input.forEach(function(word){
  var firstLetter = word.slice(0,1);
  var restOfWord = word.slice(1,word.length);
  var piggy = "ay";
  console.log(`${restOfWord}${firstLetter}${piggy}`)
  // // using slice and concat
  // //var piggy = `
  // // a few ways to do it
  // //console.log(word[0]);
  // console.log(word.slice(0,1));
  // console.log(word.slice(1,word.length)+word.slice(0,1)+"ay");
});




