import h from 'react-hyperscript';
import { shallow } from 'enzyme';
import { Button } from './button';

describe('Button Component', () => {
  it('should be defined', () => {
    const button = shallow(h(Button));
    expect(button).not.toEqual(undefined);
  });

  it('should have name class', () => {
    const button = shallow(h(Button));
    expect(button.hasClass('button')).toEqual(true);
  });

  it('should contain props.text', () => {
    const text = 'Some Text';
    const button = shallow(h(Button, {
      text,
    }));
    expect(button.text()).toEqual(text);
  });

  it('should invoke props.onPress when pressed', () => {
    let result = false;
    const onPress = () => { result = true; };
    const button = shallow(h(Button, {
      onPress,
    }));
    button.simulate('click');
    expect(result).toEqual(true);
  });
});
