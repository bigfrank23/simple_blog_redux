require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const PORT = process.env.port || 5000;
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const path = require("path");
const Post = require('./model/Post');
const { log } = require("console");


//Connect Database
connectDB()


// configs
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use("/images", express.static(path.join(__dirname + "/images")));
// app.use(express.urlencoded({extented: false}))

// app.get('/', async(req, res)=>{
//   const {q} = req.query
//   // console.log(q);
//   const keys = ["username", "title"]
//   const search = (data) => {
//     return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q)))
//   }
//   try {
//     const post = await Post.find();
//     res.status(200).json(search(post));
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
//   // res.json(Post)
//   // res.send("Hello")
// })

//Controller
app.use("/server/auth", require("./routes/auth"));
app.use("/server/post", require("./routes/post"));
app.use("/server/tech", require("./routes/tech"));
app.use("/server/others", require("./routes/others"));
app.use("/server/ent", require("./routes/ent"));
app.use("/server/sports", require("./routes/sports"));
app.use("/server/allPosts", require("./routes/allPosts"));

// Error handler (Should be the last piece of middleware)
app.use(errorHandler);

// app.get('/', (req, res) => res.send('Hello World!'))
const server = app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}!`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
