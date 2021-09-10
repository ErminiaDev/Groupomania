const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

const auth = require('../middlewares/auth');



//get all users
//router.get("/", authAdmin, userCtrl.findAllUsers);
router.get("/", userCtrl.findAllUsers);

//get a single user
router.get("/:uuid",  userCtrl.findOneUser);

//sign up new user
router.post("/signup", userCtrl.signUp);

//login
router.post("/login", userCtrl.login);

//delete user
router.delete("/:uuid", auth, userCtrl.deleteUser);

//edit a user
//router.put('/:id', auth, userCtrl.updateUser);
router.put('/:uuid', auth, userCtrl.updateUser);

module.exports = router;