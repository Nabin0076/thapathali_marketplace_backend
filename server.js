const express = require('express');
const authRoutes = require('./routes/authRoutes')
const orderRoutes = require('./routes/orderRoutes')
const cors = require('cors')
const cookieParser = require('cookie-parser');


const app =express();
const port = 4000;
app.use(express.static('uploads'));
app.use(express.json());
app.use(cors())
app.use(cookieParser(process.env.JWT_SECRET));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/order', orderRoutes);

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})