const express = require("express");
const {
  createData_tech,
  getData_tech,
  getDataById_tech,
  updateData_tech,
  deleteData_tech,
  // getPostsBySearch_tech,
  likePost_tech,
  commentPost_tech,
} = require("../controllers/tech");
const router = express.Router();

router.get("/", getData_tech);
router.post("/", createData_tech);
router.get("/:id", getDataById_tech);
router.patch("/:id", updateData_tech);
router.delete("/:id", deleteData_tech);
// router.get("/search", getPostsBySearch_tech);
router.patch("/:id/likePost", likePost_tech);
router.post("/:id/commentPost", commentPost_tech);

module.exports = router;
