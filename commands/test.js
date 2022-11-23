const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot')
		.setDescription('Replies with a salutation.'),
	async execute(interaction) {
		await interaction.reply('Yes, I am a bot!');
	},
};