import Task from "../models/task.model.js";

const getTasks = async (req, res) => {
  // Get all tasks
  const tasks = await Task.find();
  res.json(tasks);
};

const saveTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const newTask = await Task.create(task);
    res.json({ body: newTask, created: "OK" });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = Task.findById(id);

  // Verify if the task existed
  if (!task) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ mgs: error.message, ok: "NO" });
  }

  // Obtain form data
  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;

  try {
    const savedTask = await Task.updateOne(task);
    res.json({ bady: saveTask, ok: "YES" });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = Task.findById(id);

  if (!task) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ msg: error.message, ok: "NO" });
  }

  try {
    await task.deleteOne();
    return res.json({ msg: "Tarea eliminada", ok: "YES" });
  } catch (error) {
    console.log(error);
  }
};
