const express = require('express');
const authroutes = require('./routes/authroutes')


const app =express();
const port = 3000;
app.use(express.json());

app.use('/api/v1/auth', authroutes)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})