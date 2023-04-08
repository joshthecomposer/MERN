const Person = require("../models/person.model")

module.exports.index = (req, res) => {
    res.json({message: "Hello world!"})
}

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err));
}

module.exports.getAllPeople = (req, res) => {
    Person.find()
        .then(people => res.json({ people: people }))
        .catch(err => res.json(err));
}