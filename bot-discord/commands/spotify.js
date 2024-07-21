//  Definindo os slash commands
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spotify')
        .setDescription('Playlist do spotify para relaxar'),

    async execute(interaction) {
        //  Acesso através do setName (input de fato)
        if (interaction.commandName === 'spotify') {
            await interaction.reply('https://open.spotify.com/playlist/4eWBwGl0c5wtp6k5Krp6My');
        }
    }
}