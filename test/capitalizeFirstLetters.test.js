const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  // give the test a label using it
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('transforms a sentence correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('my first TDD'), 'My First TDD');
  });

  it('works with a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('f'), 'F');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});