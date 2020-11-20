require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors")
const mongoose = require("mongoose");

app.use(cors());

app.use(express.json());

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"))
}

//Call Routes
app.use("/api/repos", routes.reposRoutes);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

//MongoDB connection
// let URI = process.env.URI;
// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB connected");
// });

let PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
