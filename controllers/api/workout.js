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

// createWorkout(data = {}) {
// const res = await fetch("/api/workouts", {
// method: "POST",
router.post("/", function (req, res) {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

// const id = location.search.split("=")[1];
// const res = await fetch("/api/workouts/" + id, {
// method: "PUT"
router.put("/", function (req, res) {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

// getWorkoutsInRange() {
// const res = await fetch(`/api/workouts/range`);
router.get("/range", function (req, res) {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
