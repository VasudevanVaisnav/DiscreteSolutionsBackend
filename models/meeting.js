const mongoose = require("mongoose")
const meetingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emailId: {type: String,required: true, unique: true},
    projectAssociated: {type: String, required: true, unique:true},
    phoneNo: {type: String,required: true, unique: true},
    scheduledDate: {type: Date,required:true},
    isApprovedClient: {type:Boolean,required:true},
    isApprovedDeveloper:{type:Boolean,required:true},
    isCompleted:{type:Boolean,required:true},
    agenda: {type:String,required:true},
    meetingLink:{type:String,required:true},
    approximateDuration:{type:Int32,required:true}     
})
module.exports = mongoose.model('meeting',meetingSchema)


