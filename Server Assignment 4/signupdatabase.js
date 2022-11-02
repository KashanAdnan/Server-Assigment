const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is Connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is Disconnected");
  process.exit(1);
});

const SignIp = new mongoose.Schema({
    UserName : String,
    Password : String,
    Email : String,
    Age : String,
    BirthDate : String 
})

const signupmodel = mongoose.model("signupdata" , SignIp);

module.exports = {
    signupmodel : signupmodel
}