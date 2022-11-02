const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",
  {useNewUrlParser : true}
);

mongoose.connection.on("connected", () => {
  console.log("Mongoos is Connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoos is Disconnected");
  process.exit(1);
});

const UserSchema = new mongoose.Schema({
  stdName : String,
  email : String,
  phoneNumber : String ,
});

const UserSchemaModel = mongoose.model("Users", UserSchema);

module.exports = {
  UserSchemaModel,
};
