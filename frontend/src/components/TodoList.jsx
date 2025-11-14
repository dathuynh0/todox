import TodoCard from "./TodoCard";

const TodoList = ({ filteredTodo }) => {
  return (
    <div>
      <ul className="w-full border bg-sky-200 rounded-xl p-8">
        {filteredTodo.map((item, index) => (
          <li key={item._id ?? index}>
            <TodoCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
