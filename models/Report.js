const mongoose = require("mongoose")
const reportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    requirement:{type: String,required: true},
    feedback:{type: String},
    iterationNumber:{type:Int32,required:true, default:0},
    startDate:{type: Date,required:true,default:Date.now()},
    endDate:{type: Date,required:false},
    rating:{type:Int32,required:true,default:5},
    requirementNo:{type:Int32,required:true},
    projectTitle: {type: String, required: true, unique:true}
})
module.exports = mongoose.model('report',reportSchema)