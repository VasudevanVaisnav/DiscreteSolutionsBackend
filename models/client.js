const mongoose = require("mongoose")
const clientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    clientName: {type: String, required: true},
    emailId: {type: String,required: true, unique: true},
    password: {type: String, required: true},
    phoneNo: {type: String,required: true, unique: true},
    organisationName: {type: String}
})
module.exports = mongoose.model('client',clientSchema)