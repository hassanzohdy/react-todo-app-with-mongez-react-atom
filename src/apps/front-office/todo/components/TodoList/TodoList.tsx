import { todoAtom } from "../../atoms/todo-atom";
import TodoItem from "../TodoItem";

export default function TodoList() {
  const tasks = todoAtom.get("list");

  return tasks.map((task, index) => (
    <TodoItem key={task.id} index={index} task={task} />
  ));
}
