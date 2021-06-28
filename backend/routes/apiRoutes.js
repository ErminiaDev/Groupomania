const express = require("express");
const router = express.Router();
const db = require("../models");

//get all users
router.get("/utilisateurs", (req, res) => {
    db.User.findAll()
    .then(users => res.send(users));
});

//get all posts
router.get("/publications", (req, res) => {
    db.Post.findAll()
    .then(posts => res.send(posts));
});
//get a single post
router.get("/publications/:id", (req, res) => {
    db.Post.findAll({
        where: {
            id: req.params.id
        }
    }).then(post => res.send(post));
})


//post new post
router.post("/publications", (req, res) => {
    const user = db.User;
    db.Post.create({
        user_id: 3,
        title: req.body.title,
        category: req.body.category,
        text:req.body.text
    }).then(newPost => res.send(newPost));
});

//delete post
router.delete("/delete/:id", (req, res) => {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("deleted!"));
});

//edit a post
router.put("/edit", (req, res) => {
    db.Post.update({
        text: req.body.text
    }, {
        id: req.body.id
    }).then(()=> res.send("updated!"));
})

module.exports = router;