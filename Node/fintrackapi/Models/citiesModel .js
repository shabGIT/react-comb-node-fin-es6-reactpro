const mongoose = require("mongoose")

const citiesModel = mongoose.model("cities", {
    cityId: {
        type: String
    },
    cityName: { // step1
        type: String
    },
    isActive: {
        type: Boolean
    }
})
module.exports = citiesModel