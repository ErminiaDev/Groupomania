const express = require('express');

const router = express.Router();

const postCtrl = require('../controllers/post');

const auth = require('../middlewares/auth');

const authAdmin = require('../middlewares/authAdmin');


//get all posts
//router.get("/", auth, postCtrl.findAllPosts);
router.get("/", auth, postCtrl.findAllPosts);

//get a single post
//router.get("/:id", auth, postCtrl.findOnePost)
router.get("/:uuid", postCtrl.findOnePost)

//post new post
//router.post("/", auth, postCtrl.createPost);
router.post("/", auth, postCtrl.createPost);

//delete post
//router.delete("/:id", authAdmin, postCtrl.deletePost);
router.delete("/:uuid", postCtrl.deletePost);

//edit a post
//router.put('/:id', auth, postCtrl.updatePost);
router.put('/:uuid', postCtrl.updatePost);

module.exports = router;