const express = require('express');

const router = express.Router();

const postCtrl = require('../controllers/post');

const auth = require('../middlewares/auth');


//get all posts
router.get("/", auth, postCtrl.findAllPosts);

//get a single post
router.get("/:uuid", postCtrl.findOnePost)

//post new post
router.post("/", auth, postCtrl.createPost);

//delete post
router.delete("/:uuid", auth, postCtrl.deletePost);



module.exports = router;