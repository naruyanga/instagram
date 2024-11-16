const Router = require("express");
const userRouter = Router();

const signup = require("../controllers/signup");

userRouter.post("/signup", signup);

module.exports = userRouter;
