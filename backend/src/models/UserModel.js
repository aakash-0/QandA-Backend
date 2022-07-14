const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const Product = require("./ProductsModel");

// creating UserSchema :-
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
  },
  {
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compareSync(new String(password).trim(), this.password);
};



const User = mongoose.model("user", userSchema);
module.exports = User;
