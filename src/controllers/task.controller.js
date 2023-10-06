import List from "../models/list.model.js";
import Task from "../models/task.model.js";

const getTasks = async (req, res) => {
  // Get all tasks
  const tasks = await Task.find({
    user: req.userId,
  });
  res.json(tasks);
};

const saveTask = async (req, res) => {
  const { title, description, listId } = req.body;

  const list = await List.findOne({ _id: listId, user: req.userId });
  if (!list) {
    return res
      .status(404)
      .json({ msg: "Lista no encontrada o no autorizada." });
  }

  const newTask = new Task({
    title,
    description,
    user: req.userId,
    list: listId,
  });

  const task = await newTask.save();

  // Save the task in the list
  list.tasks.push(task);
  await list.save();

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

  const list = await List.findOne({ _id: task.list });

  if (list) {
    list.tasks = list.tasks.filter(taskId => taskId.toString() !== taskId.toString());
    await list.save();
  }

  res.json({ msg: "Tarea eliminada", ok: "YES" });
};

export { getTasks, saveTask, updateTask, deleteTask };
