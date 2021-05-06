const router = require("express").Router();
const db = require("../../models");

// getLastWorkout
// res = await fetch("/api/workouts");
router.get("/", async (req, res) => {
	try {
		const lastWorkout = await db.Workout.find({}).sort({ _id: 1 });
		res.status(200).json(lastWorkout);
	} catch (err) {
		res.status(500).json(err);
	}
});

// createWorkout(data = {}) {
// const res = await fetch("/api/workouts", {
// method: "POST",
router.post("/", async (req, res) => {
	try {
		const newWorkout = await db.Workout.create(req.body);
		res.status(200).json(newWorkout);
	} catch (err) {
		res.status(500).json(err);
	}
});

// const id = location.search.split("=")[1];
// const res = await fetch("/api/workouts/" + id, {
// method: "PUT"
router.put("/:id", async (req, res) => {
	try {
		const newExercise = await db.Workout.findByIdAndUpdate(
			req.params.id,
			{ $push: { exercises: req.body } },
			{ new: true, runValidators: true }
		);
		res.status(200).json(newExercise);
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
