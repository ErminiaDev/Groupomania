const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

const auth = require('../middlewares/auth');

const authAdmin = require('../middlewares/authAdmin');



//get all users
router.get("/", authAdmin, userCtrl.findAllUsers);

//get a single user
router.get("/:id", userCtrl.findOneUser);

//sign up new user
router.post("/", userCtrl.signUp);

//login
router.post("/", userCtrl.login);

//delete user
router.delete("/:id", authAdmin, userCtrl.deleteUser);

//edit a user
router.put('/:id', auth, userCtrl.updateUser);

module.exports = router;