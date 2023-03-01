const express = require('express');

const app = express()
//console.log(app)

//middlewares
//routes
//Error handlers middleware
//Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on ${PORT}`))

