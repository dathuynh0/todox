import express from "express";
import {
  deleteTodo,
  generateTodo,
  getAllTodo,
  updateTodo,
} from "../controller/controllerToDoX.js";

const router = express.Router();

//lay du lieu
router.get("/", getAllTodo);

//them
router.post("/", generateTodo);

//sua
router.put("/:id", updateTodo);

//xoa
router.delete("/:id", deleteTodo);

export default router;
