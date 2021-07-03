const db = require('../models');

exports.createPost = (req, res) => {
    const post = new db.Post({
        ...req.body,
        userId: 1
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Publication enregistrée!' }))
        .catch(error => res.status(400).json({ error }));
};

exports.updatePost = (req, res, next) => {
    db.Post.updateOne({ 
      uuid: req.params.id 
      }, { 
          ...req.body, uuid: req.params.id 
          })
    .then(() => res.status(200).json({ message: 'Publication modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res) => {
    db.Post.destroy({
        where: {
            uuid: req.params.id
        }
    })
    .then(() => res.status(200).json({ message:"Publication supprimée!" }))
    .catch(error => res.status(400).json({ error }));
};

exports.findAllPosts = (req, res) => {
    db.Post.findAll()
    .then(post => res.status(200).json(post))
    .catch(error => res.status(400).json({ error }));
};

exports.findOnePost = (req, res) => {
    db.Post.findAll({
        where: {
            uuid: req.params.id
        }
    })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
};
