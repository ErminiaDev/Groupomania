const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');


//get all users
router.get("/", userCtrl.findAllUsers);

//get a single user
router.get("/:id", userCtrl.findOneUser)

//sign up new user
router.post("/", userCtrl.createUser);

//delete user
router.delete("/:id", userCtrl.deleteUser);

//edit a user
router.put('/:id', userCtrl.updateUser);

module.exports = router;