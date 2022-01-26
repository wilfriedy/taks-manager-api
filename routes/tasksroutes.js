const express = require("express");
const router = express.Router();
const { getTasks, createTask } = require("../controllers/tasksmethods");

router.route("/").get(getTasks).post(createTask);

module.exports = router;
