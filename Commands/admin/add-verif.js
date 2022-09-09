const { EmbedBuilder } = require("discord.js")
const Verif = require("../../Schema/verif")

module.exports = {
    name: "add-verif",
    description: "Adding new roles to verif",
    cooldown: 3000,
    userPerms: ["ManageGuild"],
    category: "Config",
    run: async (client, message, [role]) => {

        if (!role) {
            message.reply("Please mention a roles.")
            return
        }
        const roles = message.mentions.roles.first() || message.guild.roles.cache.get(role) || message.guild.roles.cache.find((r) => r.name === role)

        if (!roles) {
            message.reply("I can't find the role you want to add")
            return
        }

        let db = await Verif.findOne({ guildId: message.guild.id })

        if (!db) {
            db = new Verif({
                guildId: message.guild.id
            })
            await db.save()
        }

        const rfind = db.roles.find((r) => r === roles.id)

        if (rfind) {
            message.reply(`${roles} already in database`)
            return 
        }

        message.reply(`${roles} has added to assign role`)

        db.roles.push({ id: roles.id, name: roles.name })
        await db.save()
        return
    }
}