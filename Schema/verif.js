const { Schema, model } = require("mongoose")

const Verif = new Schema({
    guildId: { type: String, required: true },
    roles: { type: Array, default: [] }
})

module.exports = model("verif", Verif)