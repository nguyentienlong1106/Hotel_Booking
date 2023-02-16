const express = require("express");
const {createHotel, updateHotel, deleteHotel, getHotel, getAllHotel, countByType, countByCity, getHotelRooms} = require('../controllers/hotel.js');
const {verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();

//Create
router.post('/', verifyAdmin, createHotel);
//Update
router.put('/:id', verifyAdmin, updateHotel)
//Delete
router.delete('/:id', verifyAdmin, deleteHotel)
//Get
router.get('/find/:id', getHotel)
//GetAll
router.get('/', getAllHotel)

router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
router.get('/room/:id', getHotelRooms)

module.exports = router;