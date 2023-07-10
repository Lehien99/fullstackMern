const express = require("express");
const router = express.Router();

const PostController = require("../controllers/PostController")


router.get("/posts",PostController.index);
router.post("/posts",PostController.post);
router.put("/posts/:id",PostController.put);
router.delete("/posts/:id",PostController.delete);


module.exports = router;