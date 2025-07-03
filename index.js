const passWord = document.getElementById("password");
const length = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "0123456789";
const symbol = "!@#$%^&()_-?><~";
const allCase = upperCase + symbol + number +lowerCase;

function generatePassword(){
  let password = '';
  password+= upperCase[Math.floor(Math.random() * upperCase.length)];
  password+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password+= number[Math.floor(Math.random() * number.length)];
  password+= symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length){
    password += allCase[Math.floor(Math.random()*allCase.length)]
  }
  passWord.value = password;
}

function copyPass(){
    passWord.select();
    document.execCommand("copy");
}
