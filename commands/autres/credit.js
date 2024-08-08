const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const tonetags_json = require('../../tonetags.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('credit')
        .setDescription('Crédits et remerciments du bot !'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('__**💕 ⦁  Crédits**__')
            .setColor('#58d68d')
            .setFooter({ text: 'Remerciments' })
            .setDescription('Voici la listes des remerciments/crédits pour le TonetagsHelper :')
            .addFields(
                { name: "- Mio", value: `Créateurs de la documentation (le plus gros travail, un gros coeur sur lui vraiment <3)`, inline: false },
                { name: "- Kio", value: `Devloppeur du bot (tapez le si ça ne marche pas @kiouwu__ sur insta)`, inline: false },
            );

        await interaction.reply({ embeds: [embed] });
    },
};
