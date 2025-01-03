const listaDeContato = ["Paulo", "Selina", "Roger", "Rubens", "Zeca"];


let encontrouUsuario = false;
let atingiuFimDaLista = false;
let indiceDoUsuario = 0;

while (!encontrouUsuario && !atingiuFimDaLista) {
    const usuarioAtual = listaDeContato[indiceDoUsuario];
if (usuarioAtual.startsWith("m")){
    encontrouUsuario = true;
    console.log("Usuario encontrado " + usuarioAtual);
}
indiceDoUsuario = indiceDoUsuario + 1;

if(indiceDoUsuario === listaDeContato.length){
atingiuFimDaLista = true;
console.log('Usuario não encontrado')
}
}