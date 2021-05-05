const router = require("express").Router();
const excersieRoutes = require("./excersie");
const workoutRoutes = require("./workout");

router.use("/excersie", excersieRoutes);
router.use("/workout", workoutRoutes);

module.exports = router;
