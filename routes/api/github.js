const router = require("express").Router();
const githubController = require("../../controllers/homeController");

// Matches with "/api/books"
router.route("/")
  .get(githubController.findAll)
  .post(githubController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(githubController.findById)
  .put(githubController.update)
  .delete(githubController.remove);

module.exports = router;
