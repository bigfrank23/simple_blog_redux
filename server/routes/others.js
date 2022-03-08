const express = require("express");
const {
  createData,
  getData,
  getDataById,
  updateData,
  deleteData,
  likePost,
  commentPost,
} = require("../controllers/others");
const router = express.Router();

router.get("/", getData);
router.post("/", createData);
router.get("/:id", getDataById);
router.patch("/:id", updateData);
router.delete("/:id", deleteData);
router.patch("/:id/likePost", likePost);
router.post("/:id/commentPost", commentPost);

module.exports = router;
