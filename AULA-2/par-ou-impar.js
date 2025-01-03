const listaDeNumeros = [25, 88, 30, 71, 39, 333, 192, 10, 222, 11, 62];
const listadePares = [];
const listadeImpares = [];


let indiceDoNumero = 0;

while (indiceDoNumero < listaDeNumeros.length) {
    if (listaDeNumeros[indiceDoNumero] % 2 === 0) {
        listadePares.push(listaDeNumeros[indiceDoNumero]);
    } else {
        listadeImpares.push(listaDeNumeros[indiceDoNumero]);
    }
    indiceDoNumero++;
}
console.log("numeros impares "+ listadeImpares);
console.log("numeros pares " +listadePares);