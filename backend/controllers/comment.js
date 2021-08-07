const db = require('../models');

exports.createComment = async (req, res) => {
    // fetching user with uuid from the front end
    const user = await db.User.findOne({where: {uuid : req.body.userId}});
    // fetching post with uuid from the front end
    const post = await db.Post.findOne({where: {uuid : req.body.postId}});
    const comment = new db.Comment({
        UserId: user.id,
        PostId: post.id,
        text: req.body.text
    });
    comment.save()
    .then(() => res.status(200).json({ message: 'Commentaire enregistré!' }))
    .catch(error => res.status(400).json({ error: error.toString() }));
}

exports.deleteComment = (req, res) => {
    db.Comment.destroy({
        where: {
            uuid: req.params.uuid
        }
    })
    .then(() => res.status(200).json({ message:"Commentaire supprimé!" }))
    .catch(error => res.status(400).json({ error: error.toString() }));
}

