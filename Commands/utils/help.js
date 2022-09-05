const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder, EmbedBuilder } = require('discord.js');
const { readdirSync } = require("fs");
const { prefix } = require("../../config.json");

module.exports = {
    name: 'help',
    description: "Check bot's ping.",
    cooldown: 3000,
    userPerms: [],
    botPerms: [],
    run: async (client, message, args) => {

    }
}

