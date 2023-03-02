const express = require('express');
const userRouter = require("./routes/users/userRoutes");
const postRouter = require("./routes/posts/postRoutes");
const categoriesRouter = require("./routes/categories/categoryRoutes");
const commentRouter = require("./routes/comments/commentRoutes");
require("dotenv").config();
require("./config/dbConnect")

const app = express()
//console.log(app)

//middlewares
//routes
//----
//users route
app.use("/api/v1/users/", userRouter);
//posts route
app.use("/api/v1/posts", postRouter);
//comments route
app.use("/api/v1/comments", commentRouter);
//categories route
app.use('/api/v1/categories', categoriesRouter);

//Error handlers middleware

//Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on ${PORT}`))

