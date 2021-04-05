import './TodoList.css';

const TodoItems = ({ todos, onDeleteTodo }) => {
   return (
      <ul>
         {todos.map(({ id, text }) => (
            <li key={id} className="TodoList__item">
               <p>{text}</p>
               <button
                  type="button"
                  className="TodoList__button"
                  onClick={() => onDeleteTodo(id)}
               >
                  Удалить
               </button>
            </li>
         ))}
      </ul>
   );
};

export default TodoItems;
