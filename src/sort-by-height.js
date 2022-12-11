const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArray = []
  let result = []
  arr.forEach(el=>{
    if(el!==-1){
      newArray.push(el)
    }
  })
  newArray.sort((a,b)=>a-b)
  let i = 0
  arr.forEach(el=>{
    if(el==-1){
      result.push(-1)
    }else{
      result.push(newArray[i])
      i++
    }
  })
  return result
}
arr = [-1, 150, 190, 170, -1, -1, 160, 180]
sortByHeight(arr)

module.exports = {
  sortByHeight
};
