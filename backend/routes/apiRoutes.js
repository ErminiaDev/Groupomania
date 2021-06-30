const express = require("express");
const router = express.Router();
const db = require("../models");

//get all users
router.get("/utilisateurs", (req, res) => {
    db.user.findAll()
    .then(users => res.send(users));
});

//get all posts
router.get("/publications", (req, res) => {
    db.post.findAll()
    .then(posts => res.send(posts));
});
//get a single post
router.get("/publications/:id", (req, res) => {
    db.post.findAll({
        where: {
            id: req.params.id
        }
    }).then(post => res.send(post));
})


//post new post
router.post("/publications", (req, res) => {
    db.post.create({
        //IMPORTANTinclude user id
        user_id: 1,
        title: req.body.title,
        category: req.body.category,
        text:req.body.text
    }).then(newPost => res.send(newPost));
});

//sign up new user
router.post("/utilisateurs", (req, res) => {
    db.user.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password:req.body.password,
        is_admin: 0
    }).then(newUser => res.send(newUser));
});

//delete post
router.delete("/publications/:id", (req, res) => {
    db.post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("supprimé!"));
});

//edit a post
router.put("/edit", (req, res) => {
    db.post.update({
        text: req.body.text
    }, {
        id: req.body.id
    }).then(()=> res.send("updated!"));
})

module.exports = router;