const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasksmethods");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").delete(deleteTask).patch(updateTask);

module.exports = router;
