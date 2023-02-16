const express = require("express");
const {updateUser, deleteUser, getUser, getAllUser} = require('../controllers/user.js');
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();

//Check authentication
// router.get('/checkauthentication', verifyToken, (req, res, next)=>{
//     res.send("Hello, you are admin!")
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next)=>{
//     res.send("Hello, you can edit your account")
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next)=>{
//     res.send("Hello admin, you can edit your adminsystem all accounts");
// })

//Update
router.put('/:id', verifyUser, updateUser)
//Delete
router.delete('/:id', verifyUser, deleteUser)
//Get
router.get('/:id', verifyUser, getUser)
//GetAll
router.get('/', verifyAdmin, getAllUser)


module.exports = router;