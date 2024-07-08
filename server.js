const express = require('express');
const authroutes = require('./routes/authroutes')
const orderroutes = require('./routes/orderroutes')
const cors = require('cors')
const cookieParser = require('cookie-parser');


const app =express();
const port = 4000;
app.use(express.json());
app.use(cors())
app.use(cookieParser(process.env.JWT_SECRET));

app.use('/api/v1/auth', authroutes);
app.use('/api/v1/order', orderroutes);

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})