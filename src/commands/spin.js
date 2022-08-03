const { champs, randomChamp } = require("../../data/champs.js");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spin")
    .setDescription("Replies with random LoL Champ"),
  async execute(interaction) {
    await interaction.reply(`Champ: ${randomChamp().toUpperCase()}`);
  },
};
