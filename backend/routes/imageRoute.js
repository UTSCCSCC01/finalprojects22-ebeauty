import upload from "../middleware/upload.js"
import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import Grid from "gridfs-stream";

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("test");
});

router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost:5080/file/${req.file.filename}`;
    return res.send(imgUrl);
});


router.get("/:filename", async (req, res) => {
  try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
  } catch (error) {
      res.send("not found");
  }
});

router.delete("/:filename", async (req, res) => {
  try {
      await gfs.files.deleteOne({ filename: req.params.filename });
      res.send("success");
  } catch (error) {
      console.log(error);
      res.send("An error occured.");
  }
});

export default router;