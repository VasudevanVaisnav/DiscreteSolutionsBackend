const mongoose = require("mongoose")
const meetingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emailId: {type: String},
    projectAssociated: {type: String},
    phoneNo: {type: String,required: true},
    scheduledDate: {type: Date,required:true},
    isApprovedClient: {type:Boolean,required:true},
    isApprovedDeveloper:{type:Boolean},
    isCompleted:{type:Boolean,required:true},
    agenda: {type:String,required:true},
    meetingLink:{type:String,required:true},
    approximateDuration:{type:Number,required:true}     
})
module.exports = mongoose.model('meeting',meetingSchema)


