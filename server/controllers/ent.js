const Ent = require("../model/Ent");
const mongoose = require("mongoose");

// Create route

exports.createData = async (req, res) => {
  const post = req.body;
  const newPost = new Ent(post);
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
    const post = await Ent.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Ent.findById(id);
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

  const updatedPost = await Ent.findByIdAndUpdate(
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

  await Ent.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully!" });
};


exports.likePost = async (req, res) => {
  try {
    const result = await Ent.findByIdAndUpdate(req.body.postId, {$push: {likes: req.body.userId}}, {new: true} )
    return res.json(result)
  } catch (error) {
    res.status(500).json(err)
  }
}
exports.unLikePost = async (req, res) => {
  try {
    const result = await Ent.findByIdAndUpdate(req.body.postId, {$pull: {likes: req.body.userId}}, {new: true} )
    return res.json(result)
  } catch (error) {
    res.status(500).json(err)
  }
}

exports.commentPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    const post = await Ent.findById(id);

    post.comments.push(value);

    const updatedPost = await Ent.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};
