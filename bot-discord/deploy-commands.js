//  Conexão com dotenv para buscar TOKEN, CLIENT_ID e GUILD_ID
require('dotenv').config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env
// Defino uma API REST dos discord.js e as rotas de conexão com meu servidor e o bot
const { REST, Routes } = require('discord.js')
//  Importando acesso aos arquivos e diretórios
const acess_commands = require('./acess-commands');

//  Instância REST para fazer requisições ao Bot, pois é uma API
const rest = new REST({ version: '10' }).setToken(TOKEN);

//  Função assincrona que irá se comunicar com o Bot e o Server
(async () => {
    try {
      console.log('Tentando enviar os (/) commands através de uma requisição HTTP (PUT - alterar informações da paleta de comandos do Bot)...')
    
      await rest.put(Routes.applicationCommands(CLIENT_ID, GUILD_ID), { body: acess_commands.commands_deploy })
    
      console.log('Aplicação dos (/) commands bem sucedida.')
    } catch (error) {
      console.error('Erro: ',error)
    }
})()