// require express supaya available
const express = require('express');

// objek app
const app =express();

// es6 req, tes dengan res json
app.get('/',(req,res)=>res.json('Api is works '));

const PORT = process.env.PORT ||5000;

app.listen(PORT,()=>console.log('server is running on PORT ${PORT}'));
