const mongoose = require("mongoose")

const mongooseConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGODBURL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connected to database")
    }catch(err){
        console.log("Connection failed" + err)
    }
}

module.exports = mongooseConnection