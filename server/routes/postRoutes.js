const Router = require("express");
const postRouter = Router();

const createPost = require("../controllers/createPost");

postRouter.post("/createPost", createPost);

module.exports = postRouter;
