// Routes
import express from "express";
const router: express.Router = express.Router();
import { Todo } from "../Schema/model";

router.get("/todos", async (req: express.Request, res: express.Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

router.post("/todos", async (req: express.Request, res: express.Response) => {
  const todo = new Todo({
    text: req.body.text,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});
module.exports = router
