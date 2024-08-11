const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const tonetags_json = require('../../tonetags.json');
const tonetags_list = ['j', 's', 'srs', 'hj', 'p', 'r', 'l', 'ly', 't', 'nm', 'nc', 'neg', 'pc', 'pos', 'Ih', 'nbh', 'm', 'li', 'ij', 'rh', 'rt', 'genq', 'hyp', 'c', 'th', 'f', 'g']



module.exports = {
    data: new SlashCommandBuilder()
        .setName('tonetags')
        .setDescription('Informations sur un tonetags !')
        .addStringOption(option => 
            option.setName('tonetags')
            .setDescription('Lequel ? ')
            .setRequired(true)),

    async execute(interaction) {
        const tonetags = interaction.options.getString('tonetags').toLowerCase();
        const embed = new EmbedBuilder()
            .setTitle(`__**🎲 ⦁  TonetagsHelp  /${tonetags}**__`)
            .setColor('#58d68d')
            .setFooter({ text: 'Informations sur les Tonetags | /credit ' });

        if(tonetags_list.includes(tonetags)){
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
        } else {
            embed.setDescription(`${tonetags} n'est pas un tonetags supporté par le bot, vérifiez l'orthographe, si il est correct et n'est pas présent sur la liste suivante faites \`/tonetagssuggest\` pour proposer l'ajout d'un tonetags.\n\n Voici la liste des tonetags disponible : \`j, s, srs, hj, p, r, l, ly, t, nm, nc, neg, pc, pos, Ih, nbh, m, li, ij, rh, rt, genq, hyp, c, th, f, g\``);
        }

       

        

        await interaction.reply({ embeds: [embed] });
    },
};
