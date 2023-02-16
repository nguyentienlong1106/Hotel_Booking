const User = require('../models/User.js');

const updateUser = async (req, res, next)=>{
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        .then(()=> res.redirect('/'))
        .catch(err => next(err))
}

const deleteUser = async (req, res, next)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=> res.send("User has been deleted."))
    .catch(err => next(err))
}

const getUser = async (req, res, next)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err) {
        next(err);
    }
}

const getAllUser = async (req, res, next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    }catch(err) {
        next(err);
    }
}
module.exports = { updateUser, deleteUser, getUser, getAllUser};