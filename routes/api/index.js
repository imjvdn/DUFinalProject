const router = require("express").Router();
const planRoutes = require("./plans");
const githubRoutes = require("./github");
const googleRoutes = require("./google");
const userRoutes = require("./user");
// Plan routes
router.use("/plans", planRoutes);
router.use("/github", githubRoutes);
router.use("/user", userRoutes);
router.use("/google", googleRoutes)

module.exports = router;
