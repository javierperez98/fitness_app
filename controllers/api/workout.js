const router = require("express").Router();
// const db = require("../../models");

// getLastWorkout
// res = await fetch("/api/workouts");
router.get("/", function (req, res) {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
