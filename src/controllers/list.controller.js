import List from "../models/list.model.js";

const getList = async (req, res) => {
  const lists = await List.find();
  res.json(lists);
};

const saveList = async (req, res) => {
  const { title } = req.body;

  const newList = new List({
    title,
  });

  const list = await newList.save();
  res.json(list);
};

const updateList = async (req, res) => {
  const list = await List.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!list) {
    const error = new Error("Lista no encontrada");
    return res.status(404).json({ mgs: error.message, ok: "NO" });
  }

  res.json({ body: saveList, ok: "YES" });
};

const deleteList = async (req, res) => {
  const list = await List.findByIdAndDelete(req.params.id);

  if (!list) {
    const error = new Error("Lista no encontrada");
    return res.status(404).json({ msg: error.message, ok: "NO" });
  }

  res.json({ msg: "Lista eliminada", ok: "YES" });
};

export { getList, updateList, saveList, deleteList };
