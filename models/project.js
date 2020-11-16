const mongoose = require("mongoose")
const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emailId: {type: String,required: true, unique: true},
    projectTitle: {type: String, required: true, unique:true},
    problemStatement: {type: String,required: true},
    completionDate: {type: Date},
    startingDate: {type: Date,required:true,default:Date.now()},
    initialDeadline: {type: Date,required:true},
    isApproved: {type:Boolean,required:true},
    isCompleted:{type:Boolean,required:true},
    initialBudget:{type:Int32,required:true},
    finalBudget:{type:Int32,required:false},
    reports:{type:Array,default:[]}
    // report:{
    //     requirement:{type: String,required: true},
    //     feedback:{type: String},
    //     iterationNumber:{type:Int32,required:true, default:0},
    //     startDate:{type: Date,required:true,default:Date.now()},
    //     endDate:{type: Date,required:false},
    //     rating:{type:Int32,required:true,default:5},
    //     requirementNo:{type:Int32,required:true}
    // }
})
module.exports = mongoose.model('project',projectSchema)


