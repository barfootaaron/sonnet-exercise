var sonnet = document.getElementById('sonnet').innerHTML;

console.log('This is my ', sonnet);

// Find start position the word orphans
var orphanSearch = sonnet.indexOf('orphans');
console.log('orphans position:', orphanSearch);

// Find # of characters in sonnet
var sample = sonnet.length;
console.log('sonnet length:', sample);

// Replace 'winter' with 'yuletide' 
var newString = sonnet.replace('winter', 'yuletide');
console.log('New String:', newString);

// Replace all occurences of 'the' with 'a large'
var newString2 = sonnet.replace(/the /gi, 'a large ');
console.log('New String:', newString2);

var newDiv = document.getElementById("newString");
document.getElementById('sonnet').innerHTML = newString2;