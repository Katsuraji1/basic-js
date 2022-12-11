const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
let check = []
let newArray = []
let resultObject = {}
domains.forEach(el=>{
  newArray.push(el.split('.').reverse())
})
newArray.forEach(el=>{
  let newString = ''
  el.forEach(newEl=>{
    newString+=`.${newEl}`
    if(check.includes(newString)){
      resultObject[newString]+=1
    }
    else{
      resultObject[newString]=1
      check.push(newString)
    }
  })
})
return resultObject
}


module.exports = {
  getDNSStats
};
