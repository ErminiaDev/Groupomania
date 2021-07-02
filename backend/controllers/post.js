const db = require('../models');

exports.createPost = (req, res) => {
    db.post.create({
        //IMPORTANTinclude user id
        user_id: 1,
        title: req.body.title,
        category: req.body.category,
        text:req.body.text
    }).then(newPost => res.send(newPost));
};

exports.updatePost = (req, res, next) => {
    db.post.updateOne({ 
      id: req.params.id 
      }, { 
          ...req.body, id: req.params.id 
          })
    .then(() => res.status(200).json({ message: 'Publication modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res) => {
    db.post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("supprimé!"));
};

exports.findAllPosts = (req, res) => {
    db.post.findAll()
    .then(posts => res.send(posts));
};

exports.findOnePost = (req, res) => {
    db.post.findAll({
        where: {
            id: req.params.id
        }
    }).then(post => res.send(post));
};
