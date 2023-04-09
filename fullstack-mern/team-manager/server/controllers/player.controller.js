const Player = require("../models/player.model");

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => {
            res.status(400).json(err)
        });
}

module.exports.getAll = (req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(err => res.status(400).json(err));
}

module.exports.getOne = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(Player => res.json(Player))
        .catch(err => res.status(400).json(err));
}

module.exports.updateOne = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
        .then(updated => res.json(updated))
        .catch(err => {
            res.status(400).json(err)
        });
}

module.exports.destroyOne = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(confirm => res.json(confirm))
        .catch(err => res.status(400).json(err));
}