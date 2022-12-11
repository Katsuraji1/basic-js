const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let newArray = n.toString().split('')
for(let i = 0;i<newArray.length;i++){
  if(newArray[i]<newArray[i+1]){
    newArray.splice(i,1)
    break;
  }
  if(i===newArray.length-1){
    newArray.pop()
  }
}
return Number(newArray.join(''))
}

deleteDigit(152)

module.exports = {
  deleteDigit
};
