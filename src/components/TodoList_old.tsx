import { useAppSelector } from "../store/index_old";
export function TodoList() {
  const todos = useAppSelector((store) => {
    return store.todo;
  });

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
