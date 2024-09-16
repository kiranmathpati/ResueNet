const mongoose=require('mongoose');

const mongooseSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const EmployeeModel=mongoose.model("Employee",mongooseSchema);

module.exports=EmployeeModel