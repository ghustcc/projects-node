//  dotenv
require('dotenv').config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const { REST, Routes } = require('discord.js')

//  Importar commands / ler arquivos e pastas
const fs = require('node:fs') // Trabalha com arquivos
const path = require('node:path') // Trabalha com rotas e diretórios
const commandsPath = path.join(__dirname, "commands") // Acessa a pasta desejada
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')) // Coleta os arquivos da pasta e filtra

const commands = []

for (const file of  commandsFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    //  Armazenar os command em um tipo de dado para acessar por chave (Name - definido como setName no command)
    if (command.data && command.execute) {
        commands.push(command.data.toJSON())
        // commands.push({
        //     name: command.data.name,
        //     description: command.data.description
        // })
    } else {
        console.log(`Esse comando em ${filePath} está com data ou execute indefinidos`);
    }
}

console.log(commands)

//  Instância REST para fazer requisições, pois é uma API
const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
      console.log('Started refreshing application (/) commands.')
    
      await rest.put(Routes.applicationCommands(CLIENT_ID, GUILD_ID), { body: commands })
    
      console.log('Successfully reloaded application (/) commands.')
    } catch (error) {
      console.error(error)
    }
})()