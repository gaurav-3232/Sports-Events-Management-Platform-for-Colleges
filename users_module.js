//Step 1: Database connection using connection string
const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb+srv://gaurav3242:GSM123@cluster0.0r14x2m.mongodb.net/Malik?retryWrites=true&w=majority"

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected successfully..."))
    .catch((error) => console.log(error));


//Step 2: Create Schema (similar to Java Class)
const userSchema = new mongoose.Schema({
    event_name: String,
    start_Date: Date,
    end_Date: Date,
    no_of_Team_registration: Number,
    winning_prize: Number
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("students", userSchema);

exports.User = userObject;