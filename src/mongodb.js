const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/elansol_db').then(()=>{
    console.log("Mongodb Connected")
}).catch(()=>{
    console.log("Failed to connect Mongodb")
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1",LogInSchema)

module.exports = collection