import { todoAtom } from "../../atoms/todo-atom";

export default function CompletedTasks() {
  const completedTasks = todoAtom.use("completed");

  console.log("Completed Changed to", completedTasks);

  return completedTasks;
}
