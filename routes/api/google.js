const router = require("express").Router();
const googleController = require("../../controllers/homeController");

// Matches with "/api/books"
router.route("/")
  .get(googleController.findAll)
  .post(googleController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(googleController.findById)
  .put(googleController.update)
  .delete(googleController.remove);

module.exports = router;