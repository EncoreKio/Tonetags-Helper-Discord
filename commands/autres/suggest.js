const { SlashCommandBuilder } = require('@discordjs/builders');
const { id_bannis } = require('../../config.json')
const { EmbedBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('tonetagssuggest')
        .setDescription('Suggestion d\'ajout d\'un tonetags. (abus = impossible de réutiliser)')
        .addStringOption(option => 
            option.setName('nom')
            .setDescription('Nom du Tonetags')
            .setRequired(true))
        .addStringOption(option => 
                option.setName('description')
                .setDescription('Description du Tonetags')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('exemple')
            .setDescription('Exemple d\'utilisation')
            .setRequired(true)),

    async execute(interaction) {
        if (id_bannis.includes(interaction.user.id)){
            interaction.reply('Vous ne pouvez pas faire cela. Vous avez été ajouté à la liste noir de cette commande suite à un abus.');
        } else {
            
        const nom = interaction.options.getString('nom');
        const description = interaction.options.getString('description');
        const exemple = interaction.options.getString('exemple');
        const user = await interaction.client.users.fetch('937127319464730654');

        const embed = new EmbedBuilder()
            .setTitle(`__**Suggestion !**__`)
            .setColor('#58d68d')
            .setFooter({ text: `${interaction.user.id}` })
            .addFields(
                { name: "Nom :", value: `${nom}`, inline: false },
                { name: "Description :", value: `${description}`, inline: false },
                { name: "Example", value: `${exemple}`, inline: false }
            );;
        await user.send({ embeds: [embed] });
        await interaction.reply('Merci de la suggestion ! Elle a été transmis au créateur du bot.');
        }

    },
};
