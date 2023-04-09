const Product = require("../models/product.model")

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

module.exports.getProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(newPerson => res.json(newPerson))
        .catch(err => res.json(err));
}

module.exports.destroyProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(confirm => res.json(confirm))
        .catch(err => res.json(err));
}