const db = require('../models');

exports.createPost = async (req, res) => {
    //fetching user with uuid from the front end
    const user = await db.User.findOne({ where: { uuid : req.body.userId }});
    console.log('userID', user.id)
    const post = new db.Post({
        UserId: user.id,
        title: req.body.title,
        category: req.body.category,
        text: req.body.text
    });

    post.save()
        .then(() => res.status(201).json(post))
        .catch(error => res.status(400).json({ error: error.toString() }));
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
            uuid: req.params.uuid
        }
    })
    .then(() => res.status(200).json({ message:"Publication supprimée!" }))
    .catch(error => res.status(400).json({ error: error.toString() }));
};

exports.findAllPosts = async (req, res) => {
    await db.Post.findAll({
        order: [["createdAt", "DESC"]],
        include: [
            {
            model: db.User,
            attributes: ['first_name', 'last_name']
            },
            {
            model: db.Comment,
            attributes: ['text'],
            order: [["createdAt", "DESC"]],
            include: [
                {
                model: db.User,
                attributes: ['first_name', 'last_name']
                }
            ]
            }
        ]
    })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(400).json({ error: error.toString() }));
};

exports.findOnePost = (req, res) => {
    db.Post.findAll({
        where: {
            uuid: req.params.uuid
        }
    })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error: error.toString() }));
};

exports.findOnePostByUUID = (req, res) => {
    db.Post.findAll({
        where: {
            uuid: req.params.uuid
        }
    })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error: error.toString() }));
};
