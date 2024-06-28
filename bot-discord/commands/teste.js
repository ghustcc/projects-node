//  Definindo os slash commands
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('teste')
        .setDescription('Responde teste'),

    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        
        if (interaction.commandName === 'teste') {
            await interaction.reply('Pongaaaaaaaaaa!');
        }
    }
}
