const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`WARNING : La commande ${interaction.commandName} n'a pas été trouvé.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`WARNING : Erreur lors de l'execution de ${interaction.commandName}`);
			console.error(error);
		}
	},
};