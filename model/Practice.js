const  mongoose = require("mongoose");


const PracticeSechma= new mongoose.Schema({
    username:{
        type:String,
        required:"UserName Must be Required",
        unique:true
    },
    email:{
        type:String,
        required:"Email must be Required",
        unique:true
    }
})

const Practice = new mongoose.model("login",PracticeSechma)
module.exports = Practice