const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const db = require('../models');

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new db.User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password:hash,
            is_admin: 0
        });
        user.save()
        .then(() => res.status(201).json({message: 'Utilisateur créé'}))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    db.User.findOne({ 
        where: {
            email: req.body.email
        }
     })
        .then(user => {
            if(!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé!' })
            }
            console.log(req.body.password);
            console.log(user.password);
            bcrypt.compare(req.body.password, user.password)
            .then( valid => {
                if (!valid) {
                    return res.status(401).json({ error: 'Mot de passe incorrect!' }) 
                }
                res.status(200).json({
                    uuid: user.uuid,
                    token: jwt.sign(
                        //payload
                        { userId: user.uuid },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn:'24h' }
                    ),
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    role: user.is_admin
                });
            })
            .catch(error => res.status(500).json({ error: 2 + error.toString() }))
        })
        .catch(error => res.status(500).json({ error: 1 + error.toString() }));
}

exports.updateUser = (req, res, next) => {
  db.User.updateOne({ uuid: req.params.id }, { ...req.body, uuid: req.params.id })
    .then(() => res.status(200).json({ message: 'Utilisateur modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res) => {
    db.User.destroy({
        where: {
            uuid: req.params.id
        }
    })
    .then(() => res.status(200).json({ message: 'utilisateur supprimé!' }))
    .catch(error => res.status(404).json({ error }))
};

exports.findAllUsers = (req, res) => {
    db.User.findAll()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }))
};

exports.findOneUser = (req, res) => {
    db.User.findAll({
        where: {
            uuid: req.params.id
        }
    })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }));
};