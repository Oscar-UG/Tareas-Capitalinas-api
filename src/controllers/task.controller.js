import Task from "../models/task.model.js";

const getTasks = async (req, res) => {
  // Get all tasks
  const tasks = await Task.find();
  res.json(tasks);
};

const saveTask = async (req, res) => {
  const { title, description } = req.body;

  const newTask = new Task({
    title,
    description
  });

  const task = await newTask.save();
  res.json({ body: task, created: "OK" });
};

const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  // Verify if the task existed
  if (!task) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ mgs: error.message, ok: "NO" });
  }

  res.json({ body: saveTask, ok: "YES" });
};

const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ msg: error.message, ok: "NO" });
  }

  res.json({ msg: "Tarea eliminada", ok: "YES" });
};

export { getTasks, saveTask, updateTask, deleteTask };
