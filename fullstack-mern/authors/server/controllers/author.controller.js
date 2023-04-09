const Author = require("../models/author.model");

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
}

module.exports.getAll = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}

module.exports.getOne = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.updateOne = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body,{ runValidators: true }, { new: true })
        .then(updated => res.json(updated))
        .catch(err => {
            res.json(err)
            console.log(err);
        });
}

module.exports.destroyOne = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(confirm => res.json(confirm))
        .catch(err => res.json(err));
}