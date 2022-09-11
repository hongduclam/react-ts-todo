import React, { FunctionComponent } from 'react';
import TodoList from "./TodoList";
import TodoCreation from "./TodoCreation";
import { useTodo } from "./useTodo";
import './styles.css';

interface OwnProps {
}

type Props = OwnProps;

const Todo: FunctionComponent<Props> = (props) => {
  const {todoItems, addTodo, completeTodo} = useTodo();
  return (
    <div className={'todo'}>
      <TodoList items={todoItems} onComplete={completeTodo}/>
      <hr />
      <TodoCreation onSubmit={addTodo}/>
    </div>
  );
};

export default Todo;
