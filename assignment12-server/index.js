console.clear();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

//middleWare
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
	res.send("welcome to server");
});
console.log(process.env.ACCESS_TOKEN);
app.listen(port, () => {
	console.log("listening to port", port);
});
