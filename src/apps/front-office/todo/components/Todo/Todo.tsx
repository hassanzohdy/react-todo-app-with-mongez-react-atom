import TodoForm from "../TodoForm";
import TodoHeading from "../TodoHeading";
import TodoListContainer from "../TodoListContainer";

export default function Todo() {
  return (
    <div className="bg-darkColor font-lexend min-h-screen">
      <section className="w-[80%] lg:w-[50%] xl:w-[30%] pt-16 m-auto">
        <TodoHeading />
        <div className="py-10">
          <TodoForm />
        </div>
        <TodoListContainer />
      </section>
    </div>
  );
}
