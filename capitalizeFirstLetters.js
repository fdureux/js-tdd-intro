
/* TEST */

// assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// assert.strictEqual(capitalizeFirstLetters.length, 1);
// assert.strictEqual(capitalizeFirstLetters('my first TDD'), 'My First TDD');
// assert.strictEqual(capitalizeFirstLetters('f'), 'F');
// assert.strictEqual(capitalizeFirstLetters(''), '');


/* FONCTION */

function capitalizeFirstLetters(string) {
    let splitWords = string.split(' ')
    for (let i =0; i < splitWords.length; i++) {
        splitWords[i] = splitWords[i].charAt(0).toUpperCase() +
        splitWords[i].substring(1);
    }
    let caps = splitWords.join(' ')
    return(caps.length > 0 ? caps : '') 
}

capitalizeFirstLetters();