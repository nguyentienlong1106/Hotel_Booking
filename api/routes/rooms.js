const express = require("express");
const { verifyAdmin } = require("../utils/verifyToken.js");
const {
  createRoom,
  updateRoom,
  updateRoomAvailability,
  updateRoomUnAvailability,
  deleteRoom,
  getRoom,
  getRooms,
} = require("../controllers/room.js");
const router = express.Router();

//Create
router.post("/:hotelid", verifyAdmin, createRoom);
//Update
router.put("/availability/:id", updateRoomAvailability);
router.put("/unavailability/:id", updateRoomUnAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//Get
router.get("/:id", getRoom);
//GetAll
router.get("/", getRooms);

module.exports = router;
