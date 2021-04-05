import { Component } from 'react';
import initialTodos from './todos.json';
import TodoItems from './TodoItem';
import Form from './Form';

class TodoList extends Component {
   state = {
      todos: initialTodos,
   };

   deleteTodo = todoId => {
      this.setState(prevState => ({
         todos: prevState.todos.filter(todo => todo.id !== todoId),
      }));
   };

   formSubmitHandler = data => {
      console.log(data);
   };

   render() {
      const { todos } = this.state;
      const completeTodos = todos.reduce(
         (acc, todo) => (todo.completed ? acc + 1 : acc),
         0,
      );
      return (
         <>
            <Form onSubmitManual={this.formSubmitHandler} />
            <div>
               <p> Общее количество: {todos.length}</p>
               <p> Количество выполненных {completeTodos}</p>
            </div>
            <TodoItems todos={todos} onDeleteTodo={this.deleteTodo} />;
         </>
      );
   }
}

export default TodoList;
