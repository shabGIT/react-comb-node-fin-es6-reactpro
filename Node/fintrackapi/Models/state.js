const mongoose = require("mongoose");
const stateModel = mongoose.model("state", {

    stateName: {
        type: String
    }
})
module.exports = stateModel