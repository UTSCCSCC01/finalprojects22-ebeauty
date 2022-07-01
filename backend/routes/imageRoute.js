import upload from "../middleware/upload.js"
import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import Grid from "gridfs-stream";

let gfs;
let gridFSBucket;
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("test");
    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'photos'
    });

});

router.post("/upload", upload.single('file'), async (req, res) => {
    if (req.file === undefined) return res.send("Select an image to upload.");
    console.log(req.file);
    const imgUrl = `http://localhost:5000/file/${req.file.filename}`;
    return res.send(imgUrl);
});


router.get("/:filename", async (req, res) => {
  try {
      const file = await gfs.files.findOne({ filename: req.params.filename });
      const readStream = gridFSBucket.openDownloadStream(file._id);
      readStream.pipe(res);
  } catch (error) {
      res.send("Image not found.");
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