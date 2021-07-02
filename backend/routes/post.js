const express = require('express');

const router = express.Router();

const postCtrl = require('../controllers/post');

//get all posts
router.get("/", postCtrl.findAllPosts);

//get a single post
router.get("/:id", postCtrl.findOnePost)

//post new post
router.post("/", postCtrl.createPost);

//delete post
router.delete("/:id", postCtrl.deletePost);

//edit a post
router.put('/:id', postCtrl.updatePost);

module.exports = router;