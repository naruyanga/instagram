const { postModel } = require("../models/postSchema");

const login = async (req, res) => {
  try {
    const { caption, postImage, userId } = req.body;
    const createdPost = await postModel.create({
      caption,
      postImage,
      userId,
    });
    res.status(200).send(createdPost);
  } catch (error) {
    res.status(500).send(error);
    2;
    // throw new Error(error);
  }
};
module.exports = login;
