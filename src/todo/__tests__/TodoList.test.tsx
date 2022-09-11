import renderer from 'react-test-renderer';
import TodoList from "../TodoList";

describe("<TodoList />", () => {
  it('Should matches DOM Snapshot', () => {
    const tree = renderer
      .create(<TodoList items={[{id: "1", task: "Task 1", isDone: false}]} onComplete={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});