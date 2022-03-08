const express = require("express");
const {allPosts} = require("../controllers/allPosts");
const router = express.Router();

router.get("/", allPosts);

module.exports = router;
