const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
} = require("../controllers/user.js");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();

//Update
router.put("/:id", verifyUser, updateUser);
//Delete
router.delete("/:id", verifyUser, deleteUser);
//Get
router.get("/:id", verifyUser, getUser);
//GetAll
router.get("/", verifyAdmin, getAllUser);

module.exports = router;
