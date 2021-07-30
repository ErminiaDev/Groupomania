const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

const auth = require('../middlewares/auth');



//get all users
//router.get("/", authAdmin, userCtrl.findAllUsers);
router.get("/", userCtrl.findAllUsers);

//get a single user
router.get("/:id",  userCtrl.findOneUser);

//sign up new user
router.post("/signup", userCtrl.signUp);

//login
router.post("/login", userCtrl.login);

//delete user
router.delete("/:id", userCtrl.deleteUser);

//edit a user
//router.put('/:id', auth, userCtrl.updateUser);
router.put('/:id', userCtrl.updateUser);

module.exports = router;