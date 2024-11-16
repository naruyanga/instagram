const express = require("express");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const connectDB = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://naruyanga0518:n88635033@hop-1a.rfkei.mongodb.net/IG"
  );
  if (res) console.log("db connected");
};
connectDB();

app.use("/user", userRouter);
app.use("/post", postRouter);
app.listen(8080, console.log("running"));
