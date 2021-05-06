const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("./controllers");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(router);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

// Start the server
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
