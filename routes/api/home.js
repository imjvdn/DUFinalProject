const router = require("express").Router();
const homeController = require("../../controllers/homeController");

// Matches with "/api/books"
router.route("/")
  .get(homeController.findAll)
  .post(homeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(homeController.findById)
  .put(homeController.update)
  .delete(homeController.remove);

module.exports = router;
