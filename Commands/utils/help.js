const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SelectMenuBuilder, EmbedBuilder } = require('discord.js');
const { readdirSync } = require("fs");
const { prefix } = require("../../config.json");

module.exports = {
    name: 'help',
    description: "Check bot's ping.",
    cooldown: 3000,
    userPerms: [],
    botPerms: [],
    category: "General",
    run: async (client, message, args) => {
        const embed = new EmbedBuilder()
        .setColor("Random")
        .setTitle(`${client.user.tag} Help`)
        .setThumbnail(client.user.displayAvatarURL())

        let category = new Set([ ...Object.values(client.commands.map((x) => x.category))])
        for (const c of category) {
            const cmd = client.commands.filter((x) => x.category === c)

            console.log(cmd)
            embed.addFields([
                {
                    name: c,
                    value: cmd.map((x) => x.name).join(", ")
                }
            ])
        }

        message.reply({ embeds: [embed] })
    }
}

