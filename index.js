
const express =require("express");
const mongoose = require('mongoose');
const router = require("./routes/Tourroutes");
const contactRoute =require("./routes/contactinfo");
const bookingRoute=require('./routes/bookinginfo')
// const userRouter = require("./routes/user"); 
// const authRouter = require("./routes/auth");
const FlightRouter = require("./routes/Flightinfo");
// const adminRouter =require("./routes/admin");

const authRoute = require("./routes/auth.js")
const usersRoute = require("./routes/user.js")
const hotelsRoute = require("./routes/hotels.js")
const roomsRoute = require("./routes/rooms.js")
const cookieParser = require("cookie-parser")

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const app=express();
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.use(cors());
app.use(express.json())

app.use("/tours",router);
app.use("/api/contact",contactRoute);
app.use("/api/booking",bookingRoute);
// app.use("/api/user", userRouter);
// app.use("/api/auth", authRouter);
app.use("/api/flight", FlightRouter);
// app.use("/admin",adminRouter);

// app.use((err, req, res, next) => {
//     const errorStatus = err.status || 500;
//     const errorMessage = err.message || "Something went wrong!";
//     return res.status(errorStatus).json({
//       success: false,
//       status: errorStatus,
//       message: errorMessage,
//       stack: err.stack,
//     });
//   });

mongoose.connect('mongodb+srv://rutuja:rutuja@cluster0.hvhqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(()=>{console.log("Connection Done!!")}).catch((err)=>{(console.log(err))});

app.listen(5000);