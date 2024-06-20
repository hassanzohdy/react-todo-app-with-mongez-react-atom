import { useRef } from "react";
import { todoAtom } from "../../atoms/todo-atom";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputValue = inputRef.current?.value?.trim();

    if (!inputValue) return;

    inputRef.current!.value = "";

    todoAtom.add(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-8">
        <div className="w-[80%] md:w-[85%]">
          <input
            className="bg-secondry p-5 rounded-[20px] w-full text-[#6a6158] outline-none placeholder:text-[#6a6158]"
            type="text"
            ref={inputRef}
            placeholder="write your next task"
          />
        </div>
        <div className="w-[20%] md:w-[15%] flex justify-center items-center">
          <button className="w-[60px] h-[60px] rounded-full bg-primary text-darkColor flex items-center justify-center">
            <i className="ri-add-line text-3xl font-extrabold"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
