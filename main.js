/*
    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentence = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
        let resultado = str.replace(/[aAeEiIoOuU]/g, '');
        return resultado;
}

console.log(noVowels(sentence));


/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camion";

function middleCharacter(str){

    let positionInitial;
    let positionFinal = str.length / 2 + 1;

    if(str.length % 2 === 0) {
        positionInitial = str.length / 2 - 1;
    } else{
        positionInitial = str.length / 2;
    }
  
   return str.substring(positionInitial, positionFinal)
  
}


console.log(middleCharacter(word));


/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let frase = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    let resultado = str.slice(1, -1)
    return resultado
}

console.log(deleteFirsLast(frase));

/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(numberList){
    let total = 0

    for(let i = 0; i < numberList.length; i++) {
        total = total + numberList[i]
    }
    return total
}

console.log(sumList(numberList));


/*
    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

function winner(playerList){

    let newArray = playerList.sort(function (a, b) {
        return b.score - a.score
    })

    return newArray[0].name
}


console.log(winner(playerList));


/*
¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}
*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

function counter(rebano1, rebano2){
    let resultado = {
        nOvejas: 0,
        nVacas: 0
    }

    for(let i = 0; i < rebano1.length; i++){
        if(rebano1[i] === 'v'){
            resultado.nVacas++
        } else {
            resultado.nOvejas++
        } 
    }

    for(let i = 0; i < rebano2.length; i++){
        if(rebano2[i] === 'v'){
            resultado.nVacas++
        } else {
            resultado.nOvejas++
        } 
    }

    return resultado
}

console.log(counter(rebano1,rebano2));