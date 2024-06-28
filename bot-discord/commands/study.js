//  Definindo os slash commands
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('study')
        .setDescription('Responde study'),

    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        
        if (interaction.commandName === 'study') {
            await interaction.reply('Pongaaaaaaaaaa!');
        }
    }
}
