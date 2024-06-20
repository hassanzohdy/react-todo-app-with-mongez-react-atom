import Helmet from "@mongez/react-helmet";
import Todo from "app/todo/components/Todo";

export default function HomePage() {
  return (
    <>
      <Helmet title="Todo App" appendAppName={false} />
      <Todo />
    </>
  );
}
