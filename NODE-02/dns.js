const dns = require("node:dns");

async function bootstrap() {
  const searchedUrl = "google.com.br";

  console.time("pesquisando url por DNS padrão");
  const addresses = await dns.promises.resolve4(searchedUrl);
  console.timeEnd("pesquisando url por DNS padrão");
  console.log(addresses);

  
  const nameServers = await dns.promises.resolveNs(searchedUrl);
  console.log(nameServers);


  const ipDNS = await dns.promises.resolve4(nameServers[1])
  const resolver = new dns.Resolver();
  resolver.setServers(ipDNS);

  console.time("pesquisando url por DNS costumizada")
resolver.resolve4(searchedUrl, (error, addresses) =>{
    if(error) {
console.error("Não foi possivem encontar o ipv4")
    }

        console.timeEnd("pesquisando url por DNS costumizada")
        console.log(addresses)

  })
}

bootstrap();

//  dns.resolve4(searchedUrl, (err, address) => {
// if (err) {
// console.log('url não encontrado')
// return
// }
// console.log(address)

// });
