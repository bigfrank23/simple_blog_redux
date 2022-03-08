const Tech = require("../model/Tech");
const mongoose = require("mongoose");

// Create route

exports.createData_tech = async (req, res) => {
  const post = req.body;
  const newPost = new Tech(post);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Read route
exports.getData_tech = async (req, res) => {
  try {
    const post = await Tech.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getDataById_tech = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Tech.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateData_tech = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  const updatedPost = await Tech.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );

  res.json(updatedPost);
};

// Delete route
exports.deleteData_tech = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await Tech.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully!" });
};


exports.likePost_tech = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  // if(!req.userId) return res.json({message: "Message Unauthenticated"})

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  const post = await Tech.findById(id);

  const index = post.likes.findIndex((id) => id === String(value));

  if (index === -1) {
    ///Like the post
    post.likes.push(value);
  } else {
    ///Unlike the post
    post.likes = post.likes.filter((id) => id !== String(value));
  }

  const updatedPost = await Tech.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};

exports.commentPost_tech = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    const post = await Tech.findById(id);

    post.comments.push(value);

    const updatedPost = await Tech.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};
