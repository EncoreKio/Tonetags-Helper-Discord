const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const tonetags_json = require('../../tonetags.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Informations sur un tonetags !')
        .addStringOption(option => 
            option.setName('tonetags')
            .setDescription('Lequel ? ')
            .setRequired(true)
            .addChoices(
                { "name": "/j", "value": "j" },
                { "name": "/s", "value": "s" },
                { "name": "/srs", "value": "srs" },
                { "name": "/hj", "value": "hj" },
                { "name": "/p", "value": "p" },
                { "name": "/r", "value": "r" },
                { "name": "/l", "value": "l" },
                { "name": "/ly", "value": "ly" },
                { "name": "/t", "value": "t" },
                { "name": "/nm", "value": "nm" },
                { "name": "/nc", "value": "nc" },
                { "name": "/neg", "value": "neg" },
                { "name": "/pc", "value": "pc" },
                { "name": "/pos", "value": "pos" },
                { "name": "/Ih", "value": "Ih" },
                { "name": "/nbh", "value": "nbh" },
                { "name": "/m", "value": "m" },
                { "name": "/li", "value": "li" },
                { "name": "/ij", "value": "ij" },
                { "name": "/rh", "value": "rh" },
                { "name": "/rt", "value": "rt" },
                { "name": "/genq", "value": "genq" },
                { "name": "/hyp", "value": "hyp" },
                { "name": "/c", "value": "c" },
                { "name": "/th", "value": "th" },
            )
        ),
    async execute(interaction) {
        const tonetags = interaction.options.getString('tonetags');
        const embed = new EmbedBuilder()
            .setTitle(`__**🎲 ⦁  TonetagsHelp  /${tonetags}**__`)
            .setColor('#58d68d')
            .setFooter({ text: 'Informations sur les Tonetags | /credit ' });

        const tonetags_choisi = tonetags_json[tonetags];

        if (tonetags_choisi["example"]) {
            embed.addFields(
                { name: "Nom :", value: `${tonetags_choisi["nom"]}`, inline: false },
                { name: "Description :", value: `${tonetags_choisi["description"]}`, inline: false },
                { name: "Example", value: `${tonetags_choisi["example"]}`, inline: false }
            );
        } else {
            embed.addFields(
                { name: "Nom :", value: `${tonetags_choisi["nom"]}`, inline: false },
                { name: "Description :", value: `${tonetags_choisi["description"]}`, inline: false }
            );
        }

        await interaction.reply({ embeds: [embed] });
    },
};
