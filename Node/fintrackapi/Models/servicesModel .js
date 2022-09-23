const mongoose = require("mongoose")

const servicesModel = mongoose.model("services", {
    sId: {
        type: String
    },
    sName: { // step1
        type: String
    },
    isActive: {
        type: Boolean
    }
})
module.exports = servicesModel