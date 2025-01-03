const listaDeContato = ["Paulo", "Selina", "Roger", "Rubens", "Zeca"];


let encontrouUsuario = false;
let indiceDoUsuario = 0;

while (!encontrouUsuario) {
    const usuarioAtual = listaDeContato[indiceDoUsuario];
if (usuarioAtual.startsWith("P")){
    encontrouUsuario = true;
    console.log("Usuario encontrado " + usuarioAtual);
}
indiceDoUsuario = indiceDoUsuario + 1;

}