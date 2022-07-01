// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2){
    return true
  } else {
    return false
  } 
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(texto) {
   return texto.split(" ");
}

// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3+ties
  
}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let resposta = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] > highest){
      highest = array[i];
    }
  }
  for (let k = 0; k < array.length; k++){
    if (array[k] === highest){
      resposta += 1;
    }
    
  }
 return resposta;
}



// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
