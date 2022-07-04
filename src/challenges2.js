// Desafio 11
function generatePhoneNumber(phoneNumb) {
  let teste1 = phoneNumb.filter(repChars => repChars === 1);
  let teste2 = phoneNumb.filter(repChars => repChars === 2);
  let teste3 = phoneNumb.filter(repChars => repChars === 3);
  let teste4 = phoneNumb.filter(repChars => repChars === 4);
  let teste5 = phoneNumb.filter(repChars => repChars === 5);
  let teste6 = phoneNumb.filter(repChars => repChars === 6);
  let teste7 = phoneNumb.filter(repChars => repChars === 7);
  let teste8 = phoneNumb.filter(repChars => repChars === 8);
  let teste9 = phoneNumb.filter(repChars => repChars === 9);
  let teste0 = phoneNumb.filter(repChars => repChars === 0);
  if (phoneNumb.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else if ((phoneNumb.find(element => element < 0)) || (phoneNumb.find(element => element > 9)) || (teste0.length >= 3 || teste1.length >= 3 || teste2.length >= 3 || teste3.length >= 3 || teste4.length >= 3 || teste5.length >= 3 || teste6.length >= 3 || teste7.length >= 3 || teste8.length >= 3 || teste9.length >= 3) === true) {
    return 'não é possível gerar um número de telefone com esses valores'
  } else {
    return `(${phoneNumb[0]}${phoneNumb[1]}) ${phoneNumb[2]}${phoneNumb[3]}${phoneNumb[4]}${phoneNumb[5]}${phoneNumb[6]}-${phoneNumb[7]}${phoneNumb[8]}${phoneNumb[9]}${phoneNumb[10]}`
  }
  return phoneNumb
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    if ((lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA +  lineB)) && ((lineA > Math.abs(lineB-lineC)) && (lineB > Math.abs(lineA-lineC)) && (lineC > Math.abs(lineB-lineA)))){
      return true;
    } else{
      return false;
    }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
