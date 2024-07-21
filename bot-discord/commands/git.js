//  Definindo os slash commands
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const embedGit = new EmbedBuilder()
    .setColor('Orange')
    .setTitle('Comandos Git')
    .setURL('https://discord.js.org/')
    .setDescription('Comandos mais essenciais para não esquecer')
    .addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '$ git init [nome-do-projeto]', value: 'Cria um novo repositório local com um nome especificado', inline: true },
		{ name: '$ git clone [url]', value: 'Baixa um projeto e seu histórico de versão inteiro', inline: true },
		{ name: '$ git stash', value: 'Armazena temporariamente todos os arquivos monitorados modificados', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git status', value: 'Revise edições e crie uma transação de commit', inline: true },
		{ name: '$ git add [arquivo]', value: 'Faz o snapshot de um arquivo na preparação para versionamento', inline: true },
		{ name: '$ git commit -m "[mensagem]"', value: 'Grava o snapshot permanentemente do arquivo no histórico de versão', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git branch', value: 'Lista todos os branches locais no repositório atual', inline: true },
		{ name: '$ git branch [nome-branch]', value: 'Cria uma nova branch', inline: true },
		{ name: '$ git switch -c [nome-branch]', value: 'Muda para a branch especificada e atualiza o diretório de trabalho', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git merge [nome-branch]', value: 'Combina o histórico da branch especificada a branch atual', inline: true },
		{ name: '$ git push [alias] [branch]', value: 'Envia todos os commits do branch local para o GitHub', inline: true },
		{ name: '$ git pull', value: 'Baixa o histórico e incorpora as mudanças', inline: true },
    )
    .setImage('https://media.licdn.com/dms/image/D4E12AQESXaHdHV-OMA/article-cover_image-shrink_720_1280/0/1697904028864?e=1727308800&v=beta&t=_uK6_UIvaaCiTnsyIqcZniBYjDmz-yKyj4rEYf7jIyc')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('git')
        .setDescription('Relembrar comandos do Git'),

    async execute(interaction) {
        //  Acesso através do setName (input de fato)
        if (interaction.commandName === 'git') {
            await interaction.reply({ embeds: [embedGit] });
        }
    }
}