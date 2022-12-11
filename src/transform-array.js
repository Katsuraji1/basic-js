const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArray = []
const sequences = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev'
]
if(!Array.isArray(arr)){
  throw new Error (`'arr' parameter must be an instance of the Array!`)
}
for(let i = 0;i<arr.length;i++){
  if(sequences.indexOf(arr[i])===-1){
    newArray.push(arr[i])
  }
  else{
    switch(arr[i]){
      case '--discard-next':
        i+=2
        break;
      case '--discard-prev':
        newArray.pop()
        break;
      case '--double-next':
        if(arr[i+1]){
            newArray.push(arr[i+1])
        }

        break;
      case '--double-prev':
        if(arr[i-1]){
          newArray.push(arr[i-1])
        }
        break
    }
  }
}
return newArray;
}

transform([1, 2, 3, '--discard-prev', 4, 5])

module.exports = {
  transform
};
