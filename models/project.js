const mongoose = require("mongoose")
const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    emailId: {type: String,required: true},
    projectTitle: {type: String, required: true, unique:true},
    problemStatement: {type: String,required: true},
    currentIterationNumber: {type: Number, default:1},
    currentDate: {type: Date,required:true},
    completionDate: {type: Date},
    startingDate: {type: Date,required:true,default:Date.now()},
    initialDeadline: {type: Date,required:true},
    isApproved: {type:Boolean,required:true},
    isCompleted:{type:Boolean,required:true},
    initialBudget:{type:Number,required:true},
    finalBudget:{type:Number,required:false},
    reports:{type:Array,default:[]}
    // report:{
    //     requirement:{type: String,required: true},
    //     feedback:{type: String},
    //     iterationNumber:{type:Number,required:true, default:0},
    //     startDate:{type: Date,required:true,default:Date.now()},
    //     endDate:{type: Date,required:false},
    //     rating:{type:Number,required:true,default:5},
    //     requirementNo:{type:Number,required:true}
    // }
})
module.exports = mongoose.model('project',projectSchema)


