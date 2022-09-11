import React, { FunctionComponent } from 'react';
import { TodoItems, TodoItem } from "./types";

interface OwnProps {
  items: TodoItems,
  onComplete: (id: string) => void
}

type Props = OwnProps;

const TodoList: FunctionComponent<Props> = ({items, onComplete}) => {
  return (<div className={'todo-list-container'}>
    <ol className={'todo-list'}>
      {
        items
          .filter(item => !item.isDone)
          .map(({id, task}: TodoItem) => {
          return <div key={id} className={'todo-item'}>
            <li id={`todo-item=${id}`}>{task}</li>
            <button id={`complete-button-${id}`} onClick={() => onComplete(id)}>DONE</button>
          </div>
        })
      }
      {
        items.length === 0 && <strong style={{textAlign: "center"}}>
              No items
          </strong>
      }
    </ol>
  </div>);
};

export default TodoList;
