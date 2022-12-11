const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = ''
  let option = {
    repeatTimes: 1,
    separator:'+',
    addition: '',
    additionRepeatTimes:1,
    additionSeparator:'|'
  }

  for(let key in options){
    option[key] = options[key]
  }

for(let i = 0;i<option.repeatTimes;i++){
  result+=str;
if(option.additionRepeatTimes===1){
  for(let i = 0;i<option.additionRepeatTimes;i++){
    result+=option.addition
  }
}
else if(option.additionRepeatTimes>1){
  for(let i = 0;i<option.additionRepeatTimes;i++){
    result+=option.addition+option.additionSeparator
  }
  result = result.slice(0,-option.additionSeparator.length)
}
result+=option.separator

}
result = result.slice(0,-option.separator.length)
return result

  console.log(option)
  console.log(result)
}
repeater('STRING', { repeatTimes: 3, separator: '**', 
 addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })

module.exports = {
  repeater
};
