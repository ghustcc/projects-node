const { Client, GatewayIntentBits, Collection } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

//  Defino minha coleção de commands (onde será armazenado os commands)
client.commands = new Collection()

//  dotenv
require('dotenv').config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// Conexão de login com o bot
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
client.login(TOKEN);

//  Permitir interação com as ChatInputs do usuário
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    console.log(interaction.ChatInputCommandInteraction.commandName);
});