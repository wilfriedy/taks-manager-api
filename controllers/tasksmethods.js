const Tasks = require("../models/models");

const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    await res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getTasks,
  createTask,
};
