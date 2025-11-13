import ToDoX from "../model/ToDoX.js";

export const getAllTodo = async (req, res) => {
  try {
    const todox = await ToDoX.find().sort();

    res.status(200).json(todox);
  } catch (error) {
    res.status(500).json({ message: "Loi he thong: ", error });
    console.error("Loi khi goi ham getAllToDo: ", error);
  }
};

export const generateTodo = async (req, res) => {
  try {
    const { name } = req.body;

    const todox = new ToDoX({ name });
    const newToDoX = await todox.save();

    res.status(201).json(newToDoX);
  } catch (error) {
    res.status(500).json({ message: "Loi he thong: ", error });
    console.error("Loi khi goi ham generateToDoX: ", error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    //lay cac truong can update
    const { name, status } = req.body;

    const updateToDoX = await ToDoX.findByIdAndUpdate(
      req.params.id,
      {
        name,
        status,
      },
      {
        new: true,
      }
    );

    if (!updateToDoX) {
      res.status(404).json({ message: "Du lieu khong co de update" });
    }

    res.status(200).json(updateToDoX);
  } catch (error) {
    res.status(500).json({ message: "Loi he thong: ", error });
    console.error("Loi khi goi ham updateToDoX: ", error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deleteTodoX = await ToDoX.findByIdAndDelete(req.params.id);

    if (!deleteTodoX) {
      res.status(404).json({ message: "Du lieu khong co de delete" });
    }

    res.status(200).json(deleteTodoX);
  } catch (error) {
    res.status(500).json({ message: "Loi he thong: ", error });
    console.error("Loi khi goi ham deleteToDoX: ", error);
  }
};
