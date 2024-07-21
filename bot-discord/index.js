//  Importando servidor para manter sempre ativo
const keepAlive = require("./server")
//  Importando cliente
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//  Importando acesso aos arquivos de commands
const acess_commands = require('./acess-commands');

// ------------------------------------------------------------------------- //
//  Defino minha coleção de commands (onde será armazenado os commands) - não mais necessário, pois está sendo armazenado em um array em deploy-commands

// const { Collection } = require('discord.js');
// client.commands = new Collection();
// ------------------------------------------------------------------------- //

//  Conexão com dotenv para buscar TOKEN
require('dotenv').config();
const { TOKEN } = process.env;

//  Conexão de login com o bot
client.on('ready', () => {
  console.log(`Bot logado como: ${client.user.tag}!`);
});

keepAlive();

client.login(TOKEN);

//  Permitir interação com os ChatInputs do usuário 
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  for (const command of acess_commands.commands) {
    if (interaction.commandName == command.data.name) {
      try {
        await command.execute(interaction);
      }
      catch (error) {
        console.error('Erro: ', error);
      }
    } 
  }
});