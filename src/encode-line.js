const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let arr = str.split('')
let count = 1;
let newsArr = []
for(let i = 0;i<arr.length;i++){
  if(arr[i]===arr[i+1]){
    count++;
  }else if(arr[i]!==arr[i+1] && count!==1){
    newsArr.push(`${count}${arr[i]}`)
    count = 1;
  }else{
    newsArr.push(`${arr[i]}`)
  }
}
return (newsArr.join(''))
}
encodeLine('aabbbc')

module.exports = {
  encodeLine
};
