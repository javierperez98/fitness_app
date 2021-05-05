const router = require("express").Router();
const homepage = require("./homeroutes");
const apiRoutes = require("./api");

router.use("/", homepage);
router.use("/api", apiRoutes);

module.exports = router;
