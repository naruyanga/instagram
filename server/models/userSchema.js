const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String },
    postId: { type: mongoose.Types.ObjectId, ref: "post", required: true },
  },
  { timestampes: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
