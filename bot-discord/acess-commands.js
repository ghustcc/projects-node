//  Importar commands / ler arquivos e pastas
const fs = require('node:fs') //  Trabalha com arquivos
const path = require('node:path') //  Trabalha com rotas e diretórios
const commandsPath = path.join(__dirname, "commands") //  Acessa a pasta desejada (__dirname -- diretório do projeto -- + "comands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')) //  Coleta os arquivos da pasta e filtra e add em um array

//  Array de commands
const commands_deploy = [];
const commands = [];

for (const file of commandsFiles){
  const filePath = path.join(commandsPath, file); // Path copmpleto dos files .js
  const command = require(filePath); // Importando as arquivos de commands

  //  Armazenar os command (como objetos) em um array para acessar por chave (Name - definido como setName no command)
  if (command.data && command.execute) {
    commands_deploy.push(command.data.toJSON());
    commands.push(command)
  } else {
    console.log(`Esse comando em ${filePath} está com data ou execute indefinidos`);
  }
}

module.exports = {commands_deploy, commands};