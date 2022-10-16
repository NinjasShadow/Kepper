const Verif = require("../../Schema/verif")

module.exports = {
    name: "remove-verif",
    description: "Remove assign role",
    userPerms: ["ManageGuild"],
    run: async (client, message, [role]) => {
        if (!role) {
            message.reply("Please mention a role")
            return
        }

        const roles = message.mentions.roles.first() || message.guild.roles.cache.get(role) || message.guild.roles.cache.find((r) => r.name === role)

        if (!roles) {
            message.reply("I can't find this role")
            return
        }

        const db = await Verif.findOne({ guildId: message.guild.id })

        if (!db) {
            message.reply("Sorry but i can't find any assign role at the database")
            return
        }

        const rfind = db.roles.find((r) => r.id === roles.id)

        if (!rfind) {
            message.reply(`${roles} doesn't exist at the database`)
            return
        }

        const index = db.roles.findIndex((r) => r.id === rfind)

        message.reply(`${roles} ha been removed from database`)

        db.roles.splice(index, 1)
        db.markModified("roles")
        await db.save()
        return
    }
}