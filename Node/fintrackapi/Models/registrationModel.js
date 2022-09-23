const mongoose = require("mongoose")

const registrationModel = mongoose.model("registration", {
    registId: {
        type: String,

    },
    registpass: {
        type: String,

    }
})

module.exports = registrationModel