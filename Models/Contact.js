const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        email : {type : String , required : true, unique : true},
        imageP : String
        }
)

module.exports = mongoose.model("aziz",contactSchema)
