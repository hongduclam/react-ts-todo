import React, { FormEvent, FunctionComponent, useState } from 'react';

interface OwnProps {
  onSubmit: (task: string) => void
}

type Props = OwnProps;

const TodoCreation: FunctionComponent<Props> = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputValue && onSubmit(inputValue);
    setInputValue("");
  }
  return (<form onSubmit={handleSubmit} id={'todo-form'}>
    <input id='todo-input'
           name={"todoTask"}
           placeholder={"Input task"}
           required
           value={inputValue}
           onChange={(e) => setInputValue(e.currentTarget.value)}></input>
    <button id='add-button'>ADD</button>
  </form>);
};

export default TodoCreation;
