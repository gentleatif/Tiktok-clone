import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js";
import Cors from "cors";
// app config
const app = express();
const port = process.env.PORT || 8000;
// middleware
app.use(express.json());
app.use(Cors());
// db config
const connenction_url =
  "mongodb+srv://gentleatif:a9507920T@cluster0.ft3zc.mongodb.net/tiktokDB?retryWrites=true&w=majority";
mongoose.connect(connenction_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// api endpoints
app.get("/", (req, res) => {
  res.send("this is tiktok backend");
});
app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});
// v2 dealing with mongodb
app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// listener
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
