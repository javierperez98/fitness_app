const router = require("express").Router();
const db = require("../../models");

// getLastWorkout
// res = await fetch("/api/workouts");
router.get("/", async (req, res) => {
	try {
		const workouts = await db.Workout.find({}).sort({ _id: 1 });
		res.status(200).json(workouts);
	} catch (err) {
		res.status(500).json(err);
	}
});

// createWorkout(data = {}) {
// const res = await fetch("/api/workouts", {
// method: "POST",
router.post("/", async (req, res) => {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

// const id = location.search.split("=")[1];
// const res = await fetch("/api/workouts/" + id, {
// method: "PUT"
router.put("/", async (req, res) => {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

// getWorkoutsInRange() {
// const res = await fetch(`/api/workouts/range`);
router.get("/range", async (req, res) => {
	try {
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
