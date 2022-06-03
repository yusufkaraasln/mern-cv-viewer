const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cvRoute = require("./routes/cv");
const authRoute = require("./routes/auth")
const cors = require("cors");

app.use(cors({origin: "localhost:3000"}));
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB Ayağa Kalktı."))
  .catch((e) => console.log(e));

app.use("/api/cv", cvRoute);
app.use("/api/auth", authRoute);

app.listen("3080", () => console.log("> Server is up and running on port : "));
