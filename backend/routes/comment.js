const express = require('express');

const router = express.Router();

const commentCtrl = require('../controllers/comment');

const auth = require('../middlewares/auth');

//create comment
router.post("/commentaires", auth, commentCtrl.createComment);

//delete comment
router.delete("/commentaires/:uuid", auth, commentCtrl.deleteComment);

module.exports = router;