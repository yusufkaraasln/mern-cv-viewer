const mongoose = require('mongoose')

const ApplicantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
         
    },
    email:{
        type:String,
        required:true,
        
    },
    phone:{
        type:String,
        required:true,
    },
    school:{
        type:String,
        required:true,
        
    },
    departmant:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model("Applicant",ApplicantSchema)