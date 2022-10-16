const Verif = require("../../Schema/verif")

module.exports = {
    name: "verif",
    description: "Added you an assign role",
    run: async (client, message, [role]) => {
        if (!role) {
            message.reply("Please give me the role name")
            return
        }

        const db = await Verif.findOne({ guildId: message.guild.id })

        if (!db) {
            message.reply("Sorry, but there is no assign role that i find in the database")
            return
        }

        const roles = db.roles.find((r) => r.name === role)

        if (!roles) {
            message.reply("Sorry i can't find that assign role")
            return
        }

        message.member.roles.add(roles.id)
        message.reply(`Sucessfully added **${roles.name}**`)
    }
}