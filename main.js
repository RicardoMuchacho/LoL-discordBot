//invite link: https://discord.com/api/oauth2/authorize?client_id=1002349680388223139&permissions=2147493888&scope=bot%20applications.commands

import dotenv from "dotenv";
dotenv.config();

import { champs, randomChamp } from "./data/champs.js";

import { Client, IntentsBitField, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

const CLIENT_ID = process.env.CLIENT_ID;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const BOT_TOKEN = process.env.BOT_TOKEN;
const GUILD_ID = process.env.GUILD_ID;

client.on("ready", () => {
  // console.log("bot is ready!");
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === "user") {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    );
  } else if (commandName === "spin") {
    await interaction.reply(`Champ: ${randomChamp().toUpperCase()}`);
  } else if (commandName === "troll") {
    let onlineMembers = await interaction.channel.members.filter(
      (member) => !member.user.bot
    );
    let usernames = await onlineMembers.map((member) => member.user.username);
    let rndUser = usernames[Math.floor(Math.random() * usernames.length)];
    console.log(rndUser);
    await interaction.reply(`Troll: ${rndUser}`);
  }
});

client.login(BOT_TOKEN);
