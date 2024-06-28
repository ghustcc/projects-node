//  Definindo os slash commands
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde ping'),

    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        
    }
}

