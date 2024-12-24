const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://100xDev:i0XUrTfJXBtKTdk4@cluster0.9uh7q.mongodb.net/Paytm").catch(err => { console.log("Error While connecting to DB") })

const schemaUser = mongoose.Schema({
    username: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    fname: mongoose.Schema.Types.String,
    lname: mongoose.Schema.Types.String
})

const User = mongoose.model("User", schemaUser)


module.exports = {
    User
}