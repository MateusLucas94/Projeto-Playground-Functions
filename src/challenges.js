// Desafio 1
let p1 = 2
let p2 = 2
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true
  } else {
    return false
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
console.log(calcArea(10, 50));

// Desafio 3
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

function splitSentence(string) {
  return string.split(' ')
}
splitSentence("trybe is good")

// Desafio 4
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

function concatName(string) {

  let index1 = string.shift();
  let index2 = string.pop()
  string = index2 + ", " + index1 

  return(string);
}
let teste = ['cassiano', 'leo', 'gui', 'mat'];
concatName(teste);


// Desafio 5
function footballPoints(wins,ties) {
  
  return (wins*3) + ties
}
console.log(footballPoints(14,8));

// Desafio 6
//math.max()
//
function highestCount(array) {
  
  let max = Math.max(...array);
    let result = 0
  for(index = 0; index < array.length ; index += 1){
    if(array[index] === max){
      result +=1
    }
    
  }
  return result
}
array = [1, 7, 2, 3, 5, 7]
console.log (highestCount(array))


// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  //rato maior que gato1 gato2 maior que gato1
  let distCat1= Math.abs(cat1 - mouse);
  let distCat2= Math.abs(cat2 - mouse);
  if (distCat1 < distCat2){
    return("cat1");
  }else if(distCat1 === distCat2){
    return("os gatos trombam e o rato foge")
  }
  return("cat2");
  
    
}
console.log(catAndMouse(0,3,2));



// Desafio 8
function fizzBuzz(array) {
  resultado = []
  for(index = 0; index < array.length; index += 1){
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      resultado.push("fizzBuzz")
    }else if(array[index] % 3 === 0){
      resultado.push("fizz")
    }else if(array[index] % 5 === 0){
      resultado.push("buzz")
    }else{
      resultado.push("bug!")
    }
  }
  return resultado
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))


// Desafio 9
function encode(outraCoisa) {
  resultado= outraCoisa.replaceAll(/a/g, "1")
  resultado= resultado.replaceAll(/e/g, "2")
  resultado= resultado.replaceAll(/i/g, "3")
  resultado= resultado.replaceAll(/o/g, "4")
  resultado= resultado.replaceAll(/u/g, "5")
  return resultado

}
function decode(outraCoisa) {
  resultado= outraCoisa.replaceAll(/1/g, "a")
  resultado= resultado.replaceAll(/2/g, "e")
  resultado= resultado.replaceAll(/3/g, "i")
  resultado= resultado.replaceAll(/4/g, "o")
  resultado= resultado.replaceAll(/5/g, "u")
  return resultado
}
console.log(encode("hi there!"))
console.log(decode("hi there!"))


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
};
