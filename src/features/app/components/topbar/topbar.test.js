import h from 'react-hyperscript';
import { shallow } from 'enzyme';
import { Topbar } from './topbar';

describe('Topbar Component', () => {
  it('should be defined', () => {
    const topbar = shallow(h(Topbar));
    expect(topbar).not.toEqual(undefined);
  });

  it('should have name class', () => {
    const topbar = shallow(h(Topbar));
    expect(topbar.hasClass('topbar')).toEqual(true);
  });

  describe('element __text', () => {
    it('should contain props.text', () => {
      const text = 'Some Text';
      const topbar = shallow(h(Topbar, {
        text,
      }));
      const textEl = topbar.find('.topbar__text');
      expect(textEl.text()).toEqual(text);
    });
  });
});
