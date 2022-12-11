const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let newArray = []
 if(!members||typeof members !=='object'||!members.length){return false}
  members.forEach(el=>{
    if(typeof el==='string'){
      let latters = el.replace(/[ ]/g,'').slice(0,1)
      newArray.push(latters.toLocaleUpperCase())
    }
  })
  if(newArray){
      return(newArray.sort().join(''))
  }
  else return false

}
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])
module.exports = {
  createDreamTeam
};
