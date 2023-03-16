const truePassword1 = 'qwerty';

function getPassword (truePassword) {
  return function getPasswordChecker(tryPassword) {
    return truePassword == tryPassword;
   }  
}

const check = getPassword(truePassword1);

console.log(check('wrong pass'));
console.log(check('qwerty'));
