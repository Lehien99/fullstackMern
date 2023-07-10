const Post = require("../models/Post");
const mongoose = require("mongoose");
const verifyToken = require("../Middleware/auth");

module.exports = {
  index: [
    verifyToken,
    async (req, res) => {
      try {
        const posts = await Post.find({ user: req.userID }).populate("user", [
          "username",
        ]);
        res.json({ success: true, posts });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    },
  ],
  get: async (req, res) => {},
  post: [
    verifyToken,
    async (req, res) => {
      const { title, description, content, url, status } = req.body;
      //Simple validation
      if (!title) {
        return res
          .status(400)
          .json({ success: false, message: "Title is required" });
      }
      try {
        const newPost = await new Post({
          title,
          description,
          content,
          url: url.startsWith("https://") ? url : `https://${url}`,
          status: status || "TO LEARN",
          user: req.userID,
        });
        await newPost.save();
        res.json({
          success: true,
          message: "Post successfully",
          post: newPost,
        });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    },
  ],
  put: [
    verifyToken,
    async (req, res) => {
      const { title, description, content, url, status } = req.body;

      if (!title) {
        return res
          .status(400)
          .json({ success: false, message: "Title is required" });
      }
      try {
        let updatedPost = {
          title,
          description: description || "",
          content,
          url: (url.startsWith("https://") ? url : `https://${url}`) || "",
          status: status || "TO LEARN",
        };
        const postUpdateCondition = { _id: req.params.id, user: req.userID };
        const options = { new: true };

        updatedPost = await Post.findOneAndUpdate(
          postUpdateCondition,
          updatedPost,
          options
        );

        if (!updatedPost) {
          return res.status(401).json({
            success: false,
            message: "Post not found or user not authorize",
          });
        }
        res.json({
          success: true,
          message: "Post updated",
          posts: updatedPost,
        });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    },
  ],
  delete: [
    verifyToken,
    async (req, res) => {
      try {
        const postDeleteCondition = { _id: req.params.id, user: req.userID };
        const deletePost = await Post.findOneAndDelete(postDeleteCondition);
        if (!deletePost) {
          return res.status(401).json({
            success: false,
            message: "Post not found or user not authorize",
          });
        }
        res.json({ success: true, post: deletePost });
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    },
  ],
};
