const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
	try {
		const lastWorkout = await db.Workout.find({}).sort({ _id: 1 });
		res.status(200).json(lastWorkout);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/", async (req, res) => {
	try {
		const newWorkout = await db.Workout.create(req.body);
		res.status(200).json(newWorkout);
	} catch (err) {
		res.status(500).json(err);
	}
});

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

router.get("/range", async (req, res) => {
	try {
		const range = await db.Workout.find({}).limit(7).sort({ _id: -1 });
		const newrange = range.reverse();
		res.status(200).json(newrange);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
