import renderer from 'react-test-renderer';
import TodoCreation from "../TodoCreation";

describe("<TodoCreation />", () => {
  it('Should matches DOM Snapshot', () => {
    const tree = renderer
      .create(<TodoCreation onSubmit={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});