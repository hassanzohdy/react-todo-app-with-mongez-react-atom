import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import { Random } from "@mongez/reinforcements";
import { TodoListItem } from "../types";

type TodoListActions = {
  add: (text: string) => void;
  remove: (task: TodoListItem) => void;
  refresh: () => void;
  updateTaskText: (task: TodoListItem, text: string) => void;
  toggleTaskState: (task: TodoListItem) => void;
};

type TodoAtomOptions = {
  list: TodoListItem[];
  total: number;
  completed: number;
};

export const todoAtom = atom<TodoAtomOptions, TodoListActions>({
  key: "todoItems",
  default: cache.get("todoList", {
    list: [],
    total: 0,
    completed: 0,
  }),
  beforeUpdate(data) {
    data.total = data.list.length;
    data.completed = data.list.filter(item => item.completed).length;

    cache.set("todoList", data);

    return data;
  },
  actions: {
    toggleTaskState(task: TodoListItem) {
      const list = todoAtom.get("list");

      task.completed = !task.completed;

      todoAtom.change("completed", list.filter(item => item.completed).length);

      todoAtom.silentChange("list", [...list]);
    },
    updateTaskText(task: TodoListItem, text: string) {
      task.text = text;

      todoAtom.silentChange("list", [...todoAtom.get("list")]);
    },
    refresh() {
      todoAtom.update({ ...todoAtom.value });
    },
    add: (text: string) => {
      const list = todoAtom.get("list");

      list.push({
        id: Random.int(),
        text,
        completed: false,
      });

      todoAtom.change("list", [...list]);
    },
    remove(task: TodoListItem) {
      todoAtom.change(
        "list",
        todoAtom.get("list").filter(item => item.id !== task.id),
      );
    },
  },
});
