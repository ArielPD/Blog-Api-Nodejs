const express = require('express');
const userRouter = require("./routes/users/userRoutes");
const postRouter = require("./routes/posts/postRoutes");
const categoriesRouter = require("./routes/categories/categoryRoutes");
const commentRouter = require("./routes/comments/commentRoutes");
const globalErrHanderl = require("./middlewares/globalErrHandler");

require("dotenv").config();
require("./config/dbConnect")

const app = express()
//console.log(app)

//middlewares
app.use(express.json()) //pass incoming payload

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
app.use(globalErrHanderl);

//Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on ${PORT}`))

