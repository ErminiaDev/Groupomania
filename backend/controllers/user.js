const bcrypt = require('bcrypt');

const db = require('../models');

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new db.user({
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

exports.updateUser = (req, res, next) => {
  user.updateOne({ uuid: req.params.id }, { ...req.body, uuid: req.params.id })
    .then(() => res.status(200).json({ message: 'Utilisateur modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res) => {
    db.user.destroy({
        where: {
            uuid: req.params.id
        }
    }).then(() => res.send("utilisateur supprimé!"));
};

exports.findAllUsers = (req, res) => {
    db.user.findAll()
    .then(users => res.send(users));
};

exports.findOneUser = (req, res) => {
    db.user.findAll({
        where: {
            uuid: req.params.id
        }
    }).then(user => res.send(user));
};