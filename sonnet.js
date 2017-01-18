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

// Then, in newString replace all occurences of 'the' with 'a large'
var newString2 = newString.replace(/the /gi, 'a large ');
console.log('New String:', newString2);

// Replace sonnet with new String
document.getElementById('sonnet').innerHTML = newString2;