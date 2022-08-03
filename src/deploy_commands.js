const dotenv = require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const BOT_TOKEN = process.env.BOT_TOKEN;
const GUILD_ID = process.env.GUILD_ID;

const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  new SlashCommandBuilder()
    .setName("spin")
    .setDescription("Replies with random lol champ"),
  new SlashCommandBuilder()
    .setName("troll")
    .setDescription("Replies with who will troll the game"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

//update new commands
rest
  .put(Routes.applicationCommands(CLIENT_ID), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);

//   // for guild-based commands
// rest.delete(Routes.applicationGuildCommand(clientId, guildId, 'commandId'))
// .then(() => console.log('Successfully deleted guild command'))
// .catch(console.error);

// // for global commands
// rest.delete(Routes.applicationCommand(clientId, 'commandId'))
// .then(() => console.log('Successfully deleted application command'))
// .catch(console.error);
