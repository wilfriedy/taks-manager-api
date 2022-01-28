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

const deleteTask = async (req, res) => {
  try {
    const { id: newId } = req.params;
    const task = await Tasks.findOneAndDelete({ _id: newId });
    if (!task) {
      return res.status(404).json({ message: `Task with ${newId} not found` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

// const update

const updateTask = async (req, res) => {
  try {
    const { id: newId } = req.params;
    const task = await Tasks.findOneAndUpdate({ _id: newId }, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ message: `Task with ${newId} not found` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
