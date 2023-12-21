require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./src/routers/courses");

//middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
app.use("/api/courses", courseRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
