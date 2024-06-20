import { todoAtom } from "../../atoms/todo-atom";

export default function TotalTasks() {
  const totalTasks = todoAtom.use("total");

  console.log("Total Changed to", totalTasks);

  return totalTasks;
}
