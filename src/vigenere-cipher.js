const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (value){
    this.reverse = false
    if(value === false){
      this.reverse = true
    }
  }
  encrypt(str,key) {
    if(!key || !str){
      throw new Error ('Incorrect arguments!')
    }
    let resultEncrtypted = ''
    let j = 0;
    for(let i = 0;i<str.length;i++){
      let currentLetter = str[i]
      console.log('Z'.charCodeAt())
      if(currentLetter.charCodeAt()>=97 && currentLetter.charCodeAt()<=122){
        currentLetter = currentLetter.toUpperCase()
      }
      if(currentLetter.charCodeAt()>=65 && currentLetter.charCodeAt()<=90){
        let p = currentLetter.charCodeAt()-65
        let k =(key[j%key.length].toUpperCase().charCodeAt()-65)
        let currentLett = (p+k)%26
        resultEncrtypted+=String.fromCharCode(currentLett+65)
        j++
      }
      else{
        resultEncrtypted+=currentLetter
      }
    }
    if(this.reverse == true){return resultEncrtypted.split('').reverse().join('').toUpperCase()}
    else{
      return resultEncrtypted.toUpperCase()
    }
  }
  decrypt(str,key) {
    if(!key || !str){
      throw new Error ('Incorrect arguments!')
    }
    let resultDecrtypted = ''
    let j = 0;
    for(let i = 0;i<str.length;i++){
      let currentLetter = str[i]
      console.log('Z'.charCodeAt())
      if(currentLetter.charCodeAt()>=97 && currentLetter.charCodeAt()<=122){
        currentLetter = currentLetter.toUpperCase()
      }
      if(currentLetter.charCodeAt()>=65 && currentLetter.charCodeAt()<=90){
        let p = currentLetter.charCodeAt()-65
        let k =(key[j%key.length].toUpperCase().charCodeAt()-65)
        let currentLett = (((p-k)%26)+26)%26
        resultDecrtypted+=String.fromCharCode(currentLett+65)
        j++
      }
      else{
        resultDecrtypted+=currentLetter
      }
    }
    if(this.reverse == true){return resultDecrtypted.split('').reverse().join('').toUpperCase()}
    else{
      return resultDecrtypted.toUpperCase()
    }
  }
}
const directMachine = new VigenereCipheringMachine();
 
 const reverseMachine = new VigenereCipheringMachine(false)
directMachine.encrypt('attack at dawn!', 'alphonse')

module.exports = {
  VigenereCipheringMachine
};
