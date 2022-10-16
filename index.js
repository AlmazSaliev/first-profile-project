import express from "express";
import mongoose from "mongoose";
import router from "./routes/apartment.routes.js";

const app = express();

app.use(express.json({extended: true}))

const PORT = 5000;

const Url =
  "mongodb+srv://barakat_apartments:barakat_apartments@cluster0.kckxj4u.mongodb.net/?retryWrites=true&w=majority";

app.use("/api/apartment", router);

async function start() {
  try {
    await mongoose.connect(Url);
    app.listen(PORT, () => console.log("server done" + PORT));
  } catch (e) {
    console.log("server error", e);
    process.exit(1);
  }
}

start();
