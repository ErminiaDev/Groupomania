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
    const user = db.User;
    db.post.create({
        user_id: 3,
        title: req.body.title,
        category: req.body.category,
        text:req.body.text
    }).then(newPost => res.send(newPost));
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