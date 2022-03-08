const Others = require("../model/Others");
const mongoose = require("mongoose");

// Create route

exports.createData = async (req, res) => {
  const post = req.body;
  const newPost = new Others(post);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Read route
exports.getData = async (req, res) => {
  try {
    const post = await Others.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Others.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateData = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  const updatedPost = await Others.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );

  res.json(updatedPost);
};

// Delete route
exports.deleteData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await Others.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully!" });
};


exports.likePost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  // if(!req.userId) return res.json({message: "Message Unauthenticated"})

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  const post = await Others.findById(id);

  const index = post.likes.findIndex((id) => id === String(value));

  if (index === -1) {
    ///Like the post
    post.likes.push(value);
  } else {
    ///Unlike the post
    post.likes = post.likes.filter((id) => id !== String(value));
  }

  const updatedPost = await Others.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};

exports.commentPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    const post = await Others.findById(id);

    post.comments.push(value);

    const updatedPost = await Others.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};
