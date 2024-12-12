const express = require("express");
const app = express();
require('dotenv').config();

// fetch port
const PORT = process.env.PORT || 4000;
const cors = require('cors');
app.use(
    cors({
        origin: "https://authify-khaki.vercel.app",
        credentials: true,
    })
)
// app.use(
//     cors({
//         origin: "https://authify-lilac.vercel.app",
//         credentials: true,
//     })
// )

const cookiePaser = require('cookie-parser');
app.use(cookiePaser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const adminRoutes = require('./Routes/Admin');
const userRoutes = require('./Routes/User');

app.use('/api/v1/auth',adminRoutes);
app.use('/api/v1/user',userRoutes);


//database
const {dbConnect} = require('./config/Database');
// listening on port
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})
dbConnect();
