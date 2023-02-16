const mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
      },
    price: {
        type: Number,
        required: true,
      },
    maxPeople: {
        type: Number,
        required: true,
      },
    desc: {
        type: String,
        required: true,
      },
      roomNumbers: [{number: Number, unavailableDates: {type: [Date]}}]
},{timestamps: true});

// example roomNumber: {number: 101, unavailableDates:[01.02.2022, 03.02.2022]}
//                     {number: 10, unavailableDates:[01.02.2022, 03.02.2022]}

module.exports = mongoose.model("Room", RoomSchema);