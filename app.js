require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

const port = 3000;

app.use(cors());

const bookRoutes = require("./routes/bookRouter");

const notFound = require("./middlewares/notFound");

//middleware
app.use(express.json());

//route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Restful API" });
});

app.use("/api/books", bookRoutes);

//custom 404middleware for handling unmatched routes
app.use(notFound);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected!!!");

    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to connect!!!");
  }
};

startServer();

// QzZr07OGQgGFiKM5
// manuelokpodu

// mongodb+srv://manuelokpodu:QzZr07OGQgGFiKM5@cluster0.yqgaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
