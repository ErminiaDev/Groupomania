const express = require('express');

const router = express.Router();

const commentCtrl = require('../controllers/comment');

const auth = require('../middlewares/auth');

//create comment
router.post("/", auth, commentCtrl.createComment);

//delete comment
router.delete("/", auth, commentCtrl.deleteComment);

module.exports = router;