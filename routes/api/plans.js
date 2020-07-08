const router = require("express").Router();
const plansController = require("../../controllers/plansController");

// Matches with "/api/plans"
router.route("/")
  .get(plansController.findAll)
  .post(plansController.create);

// Matches with "/api/plans/:id"
router
  .route("/:id")
  .get(plansController.findById)
  .put(plansController.update)
  .delete(plansController.remove);

module.exports = router;