const mongoose = require("mongoose")

const gendersModel = mongoose.model("genders", {
    genId: {
        type: String
    },
    genName: { // step1
        type: String
    },
    isActive: {
        type: Boolean
    }
})
module.exports = gendersModel