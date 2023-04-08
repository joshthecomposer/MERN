const User = require('../models/user.model');

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allDaUsers) => {
            res.json({users: allDaUsers})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneUser => {
            res.json({user:oneUser})
        })
        .catch((err) => {
            res.json({message:'Something went wrong', error:err})
        })
}
 
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newUser => {
            res.json({user:newUser})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {new:true, runValidators:true}
    )
        .then(updatedUser => {
            res.json({ user: updatedUser })
        })
        .catch((err) => {
            res.json({message:'Something went wrong', error:err})
        })
}

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({result:result})
        })
        .catch((err) => {
            res.json({message:'Something went wrong', error:err})
        })
}

//An alternative way to update a record...
module.exports.alternativeUpdateExistingUser = (req, res) => {
    User.findOne({ name: req.body.name })
        .then(user => {
            user.name = 'Rob Boss';
            user.pets.push({ name: 'Sprinkles', tupe: 'Chubby Unicorn' });
            return user.save();
        })
        .then(saveResult => res.json(saveResult))
        .catch(err => res.json(err));
}

//Validate for uniqueness before creating new DB entry
module.exports.checkIfUserExistsBeforeCreating = (req, res) => {
    User.exists({ name: req.body.email }) //Change email to whatever, email seems good though.
        .then(userExists => {
            if (userExists) {
                return Promise.reject('User already exists');
            }
            return User.create(req.body);
        })
        .then(saveResult => res.json(saveResult))
        .catch(err => res.json(err));
}

//KEY POINTS:
// User is a constructor function which can create new user objects and also has other methods that will talk to the database!
// the .then() will only execute upon successfully inserting data in the database
// the .catch() will execute only if there is an error.