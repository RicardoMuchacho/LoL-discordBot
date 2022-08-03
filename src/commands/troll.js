const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("troll")
    .setDescription("Replies with who will troll from the online members"),
  async execute(interaction) {
    let onlineMembers = await interaction.channel.members.filter(
      (member) => !member.user.bot
    );
    let usernames = await onlineMembers.map((member) => member.user.username);
    let rndUser = usernames[Math.floor(Math.random() * usernames.length)];
    console.log(rndUser);
    await interaction.reply(`Troll: ${rndUser}`);
  },
};
