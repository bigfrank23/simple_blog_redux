const Post = require("../model/Post")
const Sports = require("../model/Sports")
const Ent = require("../model/Ent")

exports.allPosts = async(req, res)=> {
    try {
        const post = await Post.find()
        const sports = await Sports.find()
        const ent = await Ent.find()
        const joining =   [...post, ...sports, ...ent]
        const sorting = joining.sort()
        const reversing = sorting.reverse()
        res.json(reversing)
    } catch (error) {
        res.status(500).json(error);
    }
}