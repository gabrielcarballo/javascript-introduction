// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(texto) {
  return texto.split(" ");
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties

}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let resposta = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  for (let k = 0; k < array.length; k++) {
    if (array[k] === highest) {
      resposta += 1;
    }

  }
  return resposta;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 + 1 === cat2 - 1 || cat1 - 1 === cat2 + 1) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 - mouse < cat2 - mouse) {
    return 'cat1'
  } else if (cat2 - mouse < cat1 - mouse) {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(arrayAnswer) {
  let resposta = [];
  for (let i = 0; i < arrayAnswer.length; i++) {
    if (arrayAnswer[i] % 3 === 0 && arrayAnswer[i] % 5 !== 0) {
      resposta.push('fizz');
    } else if (arrayAnswer[i] % 3 !== 0 && arrayAnswer[i] % 5 === 0) {
      resposta.push('buzz');
    } else if (arrayAnswer[i] % 3 === 0 && arrayAnswer[i] % 5 === 0) {
      resposta.push('fizzBuzz');
    } else if (arrayAnswer[i] % 3 !== 0 && arrayAnswer[i] % 5 !== 0) {
      resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode(stringA) {
  let answer = ""
  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] === 'a') {
      answer += '1'
    }
    else if (stringA[i] === 'e') {
      answer += '2'
    }
    else if (stringA[i] === 'i') {
      answer += '3'
    }
    else if (stringA[i] === 'o') {
      answer += '4'
    }
    else if (stringA[i] === 'u') {
      answer += '5'
    }
    else {
      answer += stringA[i]
    }
  }
  return answer
}
function decode(stringA) {
  let answer = ""
  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] === '1') {
      answer += 'a'
    }
    else if (stringA[i] === '2') {
      answer += 'e'
    }
    else if (stringA[i] === '3') {
      answer += 'i'
    }
    else if (stringA[i] === '4') {
      answer += 'o'
    }
    else if (stringA[i] === '5') {
      answer += 'u'
    }
    else {
      answer += stringA[i]
    }
  }
  return answer
}

// Desafio 10
function techList(array, string) {
  let answer = [];
  array.sort();
  for (let index of array) {
    answer.push({ tech: index, name: string });
  }
  if (array.length === 0) {
    return 'Vazio!'
  }
  return answer
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
