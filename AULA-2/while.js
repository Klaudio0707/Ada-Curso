const nomesDeUsuarios = ['Joao', 'Renata', 'Cleber', 'Zeca', 'Cláudio']
console.log('Olá', nomesDeUsuarios[0])
console.log('Olá', nomesDeUsuarios[1])
console.log('Olá', nomesDeUsuarios[2])
console.log('Olá', nomesDeUsuarios[3])

let rodouVezes = 0;
let vezes = 4;

while (rodouVezes < vezes){
 rodouVezes = rodouVezes + 1;  
console.log('Rodou', rodouVezes, nomesDeUsuarios[rodouVezes])

}