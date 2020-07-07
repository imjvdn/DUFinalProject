const router = require("express").Router();
const planRoutes = require("./plans");
const homeRoutes = require("./home");
const userRoutes = require("./user");
// Plan routes
router.use("/plans", planRoutes);
router.use("/home", homeRoutes);
router.use("/user", userRoutes);

module.exports = router;
