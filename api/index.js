const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.js')
const hotelRouter = require('./routes/hotels.js')
const roomRouter = require('./routes/rooms.js')
const userRouter = require('./routes/users.js')
const cookieParser = require('cookie-parser');
mongoose.set('strictQuery', true);

const app = express();
dotenv.config();

const connect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connect successfully!");
    } catch(error){
        console.log("Connect fail!");
    }
};

// check connect with mongo
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
});


// call api
// middlewares
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(8800, () => {
    connect();
    console.log('Connect to server!');
})