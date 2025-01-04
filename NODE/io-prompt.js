const rL = require("readline");

const prompt = rL.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptPromise = {
  question: (pergunta) =>
    new Promise((resolve, rejects) => {
      try {
        prompt.question(pergunta, (resposta) => resolve(resposta));
      } catch (error) {
        rejects(error);
      }
    }),
  close: () => prompt.close(),
};

// prompt.question("Qual o seu numero favorito?:  ",(resposta) => {
// console.log(`O dobro do seu número favorito é: ${parseInt(resposta)*2}`)

// prompt.question("Qual a sua cor favorita:  ",(resposta) => {
//     console.log(`Sua cor favorita é: ${resposta}`)
//     prompt.close()
//     })
// })

async function askUser() {
  const numero = await promptPromise.question("Qual o seu numero favorito:");
  console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`);

  const cor = await promptPromise.question("Qual a sua cor favorita?: ");
  console.log("sua cor favorita é " + cor);
  promptPromise.close();
}

askUser();
