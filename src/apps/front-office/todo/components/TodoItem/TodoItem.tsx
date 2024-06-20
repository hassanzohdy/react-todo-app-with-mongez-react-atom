import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { todoAtom } from "../../atoms/todo-atom";
import { TodoListItem } from "../../types";

export type TodoItemProps = {
  // props go here
  task: TodoListItem;
  index: number;
};

export default function TodoItem({ task: incomingTask, index }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(incomingTask.text);
  const [task, setTask] = useState<TodoListItem>(incomingTask);

  const deleteTask = () => {
    todoAtom.remove(task);
  };

  useEffect(() => {
    setTask(incomingTask);
    setEditingText(incomingTask.text);
  }, [incomingTask]);

  const handleUpdate = () => {
    task.text = editingText.trim();

    setTask({
      ...task,
    });

    todoAtom.updateTaskText(incomingTask, editingText.trim());

    setIsEditing(false);
  };

  const toggleCompletedTask = () => {
    setTask({
      ...task,
      completed: !task.completed,
    });

    todoAtom.toggleTaskState(incomingTask);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex justify-between items-center bg-secondry border border-borderColor rounded-2xl py-5 px-8 mb-5 h-[93px] w-full">
      <div className="flex items-center gap-3 w-[80%]">
        <button
          className={`w-5 md:w-7 h-5 md:h-7 border ${
            task.completed
              ? "bg-checkColor border-checkColor"
              : "border-primary"
          }  rounded-full hover:bg-checkColor hover:border-checkColor duration-200 cursor-pointer`}
          onClick={toggleCompletedTask}
        />
        {isEditing ? (
          <input
            className="text-textColor text-xl md:text-3xl font-bold bg-transparent border-b-2 border-textColor outline-none w-[80%]"
            value={editingText}
            onChange={e => setEditingText(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={e => {
              if (e.key === "Enter") {
                handleUpdate();
              }
            }}
            autoFocus
          />
        ) : (
          <p
            onClick={toggleCompletedTask}
            className={`text-textColor text-xl md:text-3xl font-bold overflow-hidden text-ellipsis whitespace-nowrap w-[80%] ${
              task.completed ? "line-through" : ""
            }`}>
            {task.text}
          </p>
        )}
      </div>
      <div className="flex text-xl md:text-3xl text-textColor gap-3">
        <i className="ri-edit-2-fill cursor-pointer" onClick={handleEdit}></i>
        <i
          className="ri-delete-bin-6-line cursor-pointer"
          onClick={deleteTask}></i>
      </div>
    </motion.div>
  );
}
