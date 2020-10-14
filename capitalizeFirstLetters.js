
const capitalizeFirstLetters = (string) => {
  return string.length > 0 ? 
    string.split(' ').map(words => words[0].toUpperCase() + words.slice(1)).join(' ')
  : ''
}

module.exports = capitalizeFirstLetters;
